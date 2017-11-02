const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./routes/index')
const cors = require('koa-cors')
const path = require('path')
const staticCache = require('koa-static-cache')
const config = require('./config/index')
const session = require('koa-session-minimal')
const MongoStore = require('koa-generic-session-mongo')

const resolve = file => path.resolve(__dirname, file)
const app = new Koa()

app.use(staticCache({
  dir: resolve('../../dist'),
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}))

let cookie = {
  maxAge: 5 * 60 * 1000, // cookie workable time
  expires: '',  // cookie expire time
  path: '', // cookie path
  domain: '', // cookie domain
  httpOnly: true, // verify if only use http get
  overwrite: '',  // verify if allow overwrite
  secure: '',
  sameSite: '',
  signed: '',
}
app.use(session({
  key: 'SESSION_ID',
  store: new MongoStore({}),
  cookie: cookie
}))

app.use(cors())
app.use(bodyParser())
app.use(router.routes())

app.listen(config.port || 3001, ()=> {
  console.log('Listening port' + config.port || 3001)
  console.log("Environment variables" + process.env.NODE_ENV);
})
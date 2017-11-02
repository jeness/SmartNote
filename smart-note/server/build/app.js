'use strict';

var Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var router = require('./routes/index');
var cors = require('koa-cors');
var path = require('path');
var staticCache = require('koa-static-cache');
var config = require('./config/index');
var session = require('koa-session-minimal');
var MongoStore = require('koa-generic-session-mongo');

var resolve = function resolve(file) {
  return path.resolve(__dirname, file);
};
var app = new Koa();

app.use(staticCache({
  dir: resolve('../../dist'),
  maxAge: 365 * 24 * 60 * 60,
  gzip: true
}));

var cookie = {
  maxAge: 5 * 60 * 1000, // cookie workable time
  expires: '', // cookie expires time
  path: '', // cookie path
  domain: '', // cookie domain
  httpOnly: true, // verify if only use http get
  overwrite: '', // verify if allow overwrite
  secure: '',
  sameSite: '',
  signed: ''
};
app.use(session({
  key: 'SESSION_ID',
  store: new MongoStore({}),
  cookie: cookie
}));

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

app.listen(config.port || 3001, function () {
  console.log('Listening port' + config.port || 3001);
  console.log("Environment variables" + process.env.NODE_ENV);
});
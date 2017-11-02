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
  maxAge: 5 * 60 * 1000, // cookie有效时长
  expires: '', // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: true, // 是否只用于http请求中获取
  overwrite: '', // 是否允许重写
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
  console.log('监听端口' + config.port || 3001);
  console.log("环境变量是" + process.env.NODE_ENV);
});
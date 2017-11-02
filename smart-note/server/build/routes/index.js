'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Router = require('koa-router');
var read = require('node-readability');
var fs = require('fs');
var path = require('path');
var Models = require('../models');
var phantom = require('phantom');
var users = require('../users').items;

var resolve = function resolve(file) {
	return path.resolve(__dirname, file);
};
var router = new Router();

// define success template
var successState = {
	msg: 'success',
	code: 200,
	data: ''
	// define failed template
};var errorState = {
	msg: 'error',
	code: '',
	data: ''
};

var findUser = function findUser(name, password) {
	return users.find(function (item) {
		return item.name === name && item.password === password;
	});
};

router.post('/api/login', function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
		var user, session;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						user = findUser(ctx.request.body.name, ctx.request.body.pwd);

						if (user) {
							session = ctx.session;

							session.isLogin = true;
							session.userName = ctx.request.body.name;
							successState.msg = 'Successfully Login!';
							ctx.body = successState;
						} else {
							errorState.msg = 'Incorrect account or password!';
							errorState.code = 400;
							ctx.body = errorState;
						}

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

router.get('/api/logout', function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
		var success;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						ctx.session = null;
						success = Object.assign({}, successState, {
							code: 200,
							msg: 'Sucessfully Sign Out！'
						});

						ctx.response.body = success;

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

/**
 * Note C、R、U、D
 */

router.get('/api/allNote', function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context3.next = 5;
							break;
						}

						_context3.next = 3;
						return Models.NoteList.find({ user_name: ctx.session.userName }, function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							var success = Object.assign({}, successState, {
								data: docs.reverse()
							});
							ctx.response.body = success;
							ctx.sessionHandler.regenerateId();
						});

					case 3:
						_context3.next = 7;
						break;

					case 5:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 7:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

// generate note
router.post('/api/generateNote', function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx, next) {
		var instance, page, status, content, error;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context4.next = 19;
							break;
						}

						_context4.next = 3;
						return phantom.create();

					case 3:
						instance = _context4.sent;
						_context4.next = 6;
						return instance.createPage();

					case 6:
						page = _context4.sent;
						_context4.next = 9;
						return page.open(ctx.request.body.link);

					case 9:
						status = _context4.sent;
						_context4.next = 12;
						return page.property('content');

					case 12:
						content = _context4.sent;
						_context4.next = 15;
						return instance.exit();

					case 15:
						_context4.next = 17;
						return new Promise(function (resolve, reject) {
							read(content, function (err, article, meta) {
								if (err) {
									reject(err);
								} else {
									resolve(article);
								}
							});
						}).then(function (success) {
							ctx.body = {
								title: success.title,
								content: success.content
							};
						});

					case 17:
						_context4.next = 21;
						break;

					case 19:
						error = Object.assign({}, successState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 21:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function (_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}());

// add note
router.post('/api/addNote', function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context5.next = 6;
							break;
						}

						ctx.request.body['user_name'] = ctx.session.userName;
						_context5.next = 4;
						return new Models.NoteList(ctx.request.body).save(function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							successState.data = docs;
							ctx.response.body = successState;
						});

					case 4:
						_context5.next = 8;
						break;

					case 6:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 8:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, undefined);
	}));

	return function (_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}());

// delete note
router.post('/api/deleteNote', function () {
	var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context6.next = 5;
							break;
						}

						_context6.next = 3;
						return Models.NoteList.remove({
							_id: ctx.request.body.id,
							user_name: ctx.session.userName
						}, function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							successState.data = docs;
							ctx.response.body = successState;
						});

					case 3:
						_context6.next = 7;
						break;

					case 5:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 7:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, undefined);
	}));

	return function (_x11, _x12) {
		return _ref6.apply(this, arguments);
	};
}());

// modify note
router.post('/api/modify', function () {
	var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context7.next = 5;
							break;
						}

						_context7.next = 3;
						return new Promise(function (resolve, reject) {
							Models.NoteList.update({
								_id: ctx.request.body._id,
								user_name: ctx.session.userName
							}, ctx.request.body, function (err, docs) {
								if (err) {
									reject(err);
								} else {
									resolve(docs);
								}
							});
						}).then(function (success) {
							successState.data = ctx.request.body;
							ctx.response.body = successState;
						});

					case 3:
						_context7.next = 7;
						break;

					case 5:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 7:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, undefined);
	}));

	return function (_x13, _x14) {
		return _ref7.apply(this, arguments);
	};
}());

/**
 * Label C、R、U、D
 */

router.post('/api/addTag', function () {
	var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context8.next = 6;
							break;
						}

						ctx.request.body['user_name'] = ctx.session.userName;
						_context8.next = 4;
						return new Models.TagList(ctx.request.body).save(function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							successState.data = docs;
							ctx.response.body = successState;
						});

					case 4:
						_context8.next = 8;
						break;

					case 6:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 8:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, undefined);
	}));

	return function (_x15, _x16) {
		return _ref8.apply(this, arguments);
	};
}());

router.post('/api/deleteTag', function () {
	var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee9$(_context9) {
			while (1) {
				switch (_context9.prev = _context9.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context9.next = 5;
							break;
						}

						_context9.next = 3;
						return Models.TagList.remove({
							_id: ctx.request.body.id,
							user_name: ctx.session.userName
						}, function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							successState.data = docs;
							ctx.response.body = successState;
						});

					case 3:
						_context9.next = 7;
						break;

					case 5:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 7:
					case 'end':
						return _context9.stop();
				}
			}
		}, _callee9, undefined);
	}));

	return function (_x17, _x18) {
		return _ref9.apply(this, arguments);
	};
}());

router.get('/api/TagList', function () {
	var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(ctx, next) {
		var error;
		return regeneratorRuntime.wrap(function _callee10$(_context10) {
			while (1) {
				switch (_context10.prev = _context10.next) {
					case 0:
						if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
							_context10.next = 5;
							break;
						}

						_context10.next = 3;
						return Models.TagList.find({ user_name: ctx.session.userName }, function (err, docs) {
							if (err) {
								ctx.throw(500);
								return;
							}
							var success = Object.assign({}, successState, {
								data: docs.reverse()
							});
							ctx.response.body = success;
						});

					case 3:
						_context10.next = 7;
						break;

					case 5:
						error = Object.assign({}, errorState, {
							code: 401,
							msg: 'Unauthorized'
						});

						ctx.body = error;

					case 7:
					case 'end':
						return _context10.stop();
				}
			}
		}, _callee10, undefined);
	}));

	return function (_x19, _x20) {
		return _ref10.apply(this, arguments);
	};
}());

router.get('*', function (ctx, next) {
	var html = fs.readFileSync(resolve('../../../dist/' + 'index.html'), 'utf-8');
	ctx.body = html;
});

module.exports = router;
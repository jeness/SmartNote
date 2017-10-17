const Router = require('koa-router')
const read = require('node-readability')
const fs = require('fs')
const path = require('path')
const Models = require('../models')
const phantom = require('phantom')
const users = require('../users').items

const resolve = file => path.resolve(__dirname, file)
const router = new Router()

// message for success
let successState = {
	msg: 'success',
	code: 200,
	data: ''
}
// message for error
let errorState = {
	msg: 'error',
	code: '',
	data: ''
}

const findUser = function(name, password){
	return users.find(function(item){
			return item.name === name && item.password === password;
	});
};

router.post('/api/login', async (ctx, next) => {
	let user = findUser(ctx.request.body.name, ctx.request.body.pwd);
	if(user){
		let session = ctx.session
		session.isLogin = true
		session.userName = ctx.request.body.name
		successState.msg = 'Login Successfully！'
		ctx.body = successState
	}else{
		errorState.msg = 'Username or password is wrong！'
		errorState.code = 400
		ctx.body = errorState
	}
})

router.get('/api/logout', async (ctx, next) => {
	ctx.session = null;
	let success = Object.assign({}, successState, {
		code: 200,
		msg: 'Logout successfully！'
	})
	ctx.response.body = success
})



module.exports = router
const router = require('koa-router')();

const routers = router
    .get('/', async (ctx) => {
        ctx.body = 'coming soon...'
        // ctx.body = '等待开发'
        
    })

module.exports = routers;
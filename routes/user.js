const router = require('koa-router')()

router.prefix('/api/user')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/session-test', async function (ctx, next) {
  if (ctx.session) {
    if (!ctx.session.viewCount) {
      ctx.session.viewCount = 0
    }
    ctx.session.viewCount++
    console.log(ctx.session.viewCount)
    ctx.body = {
      code: 200,
      data: {
        a: 1,
        viewCount: ctx.session.viewCount
      }
    }
  }
})

module.exports = router
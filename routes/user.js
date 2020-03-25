const router = require('koa-router')()

router.prefix('/api/user')

router.post('/login', async(ctx, next)=>{
  const {username, password} = ctx.request.body
  ctx.body={
    code: 200,
    data: {
      username,
      password
    }
  }
})

router.get('/login', async function (ctx, next) {
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
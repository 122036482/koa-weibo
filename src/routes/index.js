const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/profile/:username',async (ctx, next) => {
  const {username} = ctx.params
  ctx.body = {
    title: 'this is profile page',
    username
  }
})
router.get('/loadmore/:username/:pageIndex',async (ctx, next) => {
  const {username, pageIndex} = ctx.params
  ctx.body = {
    title: 'this is loadmore page',
    username,
    pageIndex
  }
})

module.exports = router

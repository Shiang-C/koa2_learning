//引入
const Koa = require('koa')
const Router = require('koa-router')

//宣告
const app = new Koa()
const router = new Router()

//reponse
// app.use(ctx => {
//   ctx.body = 'Hello Koa'
// })

router.get('/', ctx => {
  ctx.body = '這是一個主頁'
})

router.get('/user', ctx => {
  ctx.body = '這是使用頁'
})

router.get('/post', ctx => {
  ctx.body = ctx.request.body
})

router.get('/async', async ctx => {
  const sleep = async (ms) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true)
      }, ms)
    })
  }
  await sleep(1000)
  ctx.body = '這是異步處理頁'
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

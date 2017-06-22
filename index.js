const Koa = require('koa')
const app = new Koa()

//reponse
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)

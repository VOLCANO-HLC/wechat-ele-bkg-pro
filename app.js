const Koa = require('koa');
const app = new Koa();
const json = require('koa-json')
// const router = require('koa-router')()
const router = require('./router/index.js')
const cors = require('koa2-cors')
const static = require('koa-static')
const path = require('path')



app.use(json())
app.use(static(path.join(__dirname + '/assets')))
app.use(cors())
//启动路由
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
console.log('启动成功');
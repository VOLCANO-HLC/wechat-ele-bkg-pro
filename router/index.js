const router = require('koa-router')()
const home = require('./home')
const categories = require('./categories')
const goods = require('./goods')
const login = require('./login')
const my = require('./my')
//get 请求路由 ctx 上下文  next 下一个
// router.get('/', async (ctx) => {
//   // console.log(ctx);
//   // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
//   ctx.body = {
//     data: [
//       { 'meg': '收到请求，返回数据' }
//     ]
//   }

// })
// router.get('/list', async (ctx) => {
//   console.log(ctx.query);
//   console.log(ctx.querystring);
//   console.log(ctx.request.query);
//   ctx.body = '111'
// })
router.use('/home', home.routes(), home.allowedMethods())
router.use('/categories', categories.routes(), categories.allowedMethods())
router.use('/goods', goods.routes(), goods.allowedMethods())
router.use('/login', login.routes(), login.allowedMethods())
router.use('/my', my.routes(), my.allowedMethods())
// 路由重定向
router.redirect('/', '/home')
module.exports = router
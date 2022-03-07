const db = require('../utils/db')
const login = require('koa-router')()
let request = require('request')
const bodyparser = require('koa-bodyparser')//获取post请求参数的中间件
const jwt = require('jsonwebtoken')//生成token
const baseUrl = require('../utils/baseUrl')
let qs = require('querystring')
login.use(bodyparser())
let openid = {}
function returnData(id) {
  console.log(id, 'id');
  openid = id
  return id
}
function http(code, callback) {
  let params = qs.stringify({
    'appid': 'wxfad730008595355d',
    'secret': '0897eb2c37a40bcb3796fe9b744997fa',
    'js_code': code,
    'grant_type': 'authorization_code'

  })
  let url = 'https://api.weixin.qq.com/sns/jscode2session?' + params

  return new Promise((resolve, reject) => {
    return request(url, function (error, response, body,) {

      console.log(body);
      // openid = body.openid
      callback(body)//body 为字符串，需要转化为 对象
      resolve(body.openid)
    })

  })

}

login.post('/', async (ctx) => {
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象

  // console.log(ctx.request.body, 'login');
  let query = ctx.request.body.code  // console.log(ctx);
  // let openid = 'www'
  await http(query, returnData)
  // console.log(openid, 'openid');
  // console.log(openid.openid, 'openid');
  let id = JSON.parse(openid)
  console.log('结束');
  // o6vQP4ym0WNnx4bfHp84b4np - GTw
  // o6vQP4ym0WNnx4bfHp84b4np - GTw
  // console.log(typeof (id), 'first');
  // console.log(id["openid"], 'first');
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from users where openid='${id.openid}' `, (err, data) => {
      if (err) throw err
      console.log(id.openid, 'openid');
      console.log(data, 'users');
      resolve(data)
    })
  })
  if (!mydata.length) {
    let res = await new Promise((resolve, reject) => {
      let token = jwt.sign({ openid: id.openid }, 'secret', { expiresIn: 3600 })
      return db.query(`insert into users values ('${token}','${id.openid}') `, (err, data) => {
        if (err) throw err

        // console.log(data, 'users');
        // console.log(token, 'token');
        resolve(token)
      })
    })
    console.log('res', res);
    ctx.body = {
      message: {
        msg: '首次登录成功',
        token: res
      }
    }
  } else {
    ctx.body = {
      message: {
        msg: '登录成功',
        token: mydata[0].token
      }
    }
  }

})
module.exports = login
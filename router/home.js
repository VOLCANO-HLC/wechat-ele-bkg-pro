//所有 home请求
const db = require('../utils/db')
const home = require('koa-router')()
const baseUrl = require('../utils/baseUrl')
home.get('/', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  ctx.body = {
    data: [
      { 'meg': '收到home请求，返回数据' }
    ]
  }
})
home.get('/swiperdata', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from swiperdata`, (err, data) => {
      if (err) throw err
      data.map(val => {
        val.image_src = baseUrl + val.image_src
      })
      resolve(data)
    })
  })
  ctx.body = {
    message: [...mydata]
  }
})
home.get('/catitems', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from catesList ORDER BY image_src asc`, (err, data) => {
      if (err) throw err
      data.map(val => {
        val.image_src = baseUrl + val.image_src
      })
      resolve(data)
    })
  })
  ctx.body = {
    message: [...mydata]
  }
})
home.get('/floordata', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let mydata1 = await new Promise((resolve, reject) => {
    return db.query(`select * from floor_title ORDER BY image_src asc `, (err, data) => {
      if (err) throw err
      data.map(val => {
        val.image_src = baseUrl + val.image_src
      })
      // console.log(data);
      resolve(data)
    })
  })
  let mydata2 = await new Promise((resolve, reject) => {
    return db.query(`select * from product_list ORDER BY image_src asc `, (err, data) => {
      if (err) throw err
      data.map(val => {
        val.image_src = baseUrl + val.image_src
      })
      resolve(data)
    })
  })
  let mydata = []
  for (let i = 0; i < 3; i++) {
    let data1 = mydata1[i]
    let data2 = []

    for (let j = 0; j < 5; j++) {
      data2 = [...data2, mydata2[i * 5 + j]]
    }
    mydata = [...mydata, { floor_title: data1, product_list: data2 }]
  }

  ctx.body = {
    message: [...mydata]
  }
})
module.exports = home
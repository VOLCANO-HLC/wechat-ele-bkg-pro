const goods = require('koa-router')()
const db = require('../utils/db')

const baseUrl = require('../utils/baseUrl')
goods.get('/', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  ctx.body = {
    data: [
      { 'meg': '收到/goods' }
    ]
  }
})
goods.get('/search', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let query = ctx.query
  console.log(query);
  let mydata = await new Promise((resolve, reject) => {
    if (query.query) {
      return db.query(`select * from goods_list where query='${query.query}'`, (err, data) => {
        if (err) throw err
        console.log(data);
        data.map(val => {
          val.goods_small_logo = baseUrl + val.goods_small_logo
        })
        let newdata = []
        for (let i = 0; i < query.pagesize && ((query.pagenum - 1) * query.pagesize + i) < data.length; i++) {
          newdata = [...newdata, data[(query.pagenum - 1) * query.pagesize + i]]
        }
        resolve(newdata)
      })
    }
    if (query.cid) {

      return db.query(`select * from goods_list where cat_id=${query.cid}`, (err, data) => {
        if (err) throw err
        console.log(data);
        data.map(val => {
          val.goods_small_logo = baseUrl + val.goods_small_logo
        })
        let newdata = []
        for (let i = 0; i < query.pagesize && ((query.pagenum - 1) * query.pagesize + i) < data.length; i++) {
          newdata = [...newdata, data[(query.pagenum - 1) * query.pagesize + i]]
        }
        resolve(newdata)
      })
    }
  })
  ctx.body = {
    message: {
      goods: [...mydata],
      pagenum: query.pagenum,
      total: mydata.length
    }
  }
})
goods.get('/qsearch', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let query = ctx.query
  console.log(query);
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select goods_id, goods_name from goods_detail_list where goods_name like '%${query.query}%'`, (err, data) => {
      if (err) throw err
      data.map(val => {

      })
      // console.log(data);
      resolve(data)
    })
  })
  console.log(query.query);

  // console.log(mydata);
  // let mydata1 = []
  // for (let i = 0; i < mydata.length; i++) {
  //   let ojb = {}
  //   ojb.goods_id = mydata[i].goods_id
  //   ojb.goods_name = mydata[i].goods_name
  //   mydata1[i] = ojb
  // }
  ctx.body = {
    message: {
      ...mydata
    }
  }
  // ctx.body = {
  //   message: {
  //     msg: 'success'
  //   }
  // }
})
goods.get('/detail', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let query = ctx.query
  console.log(query);
  let mydata = await new Promise((resolve, reject) => {
    if (query.goods_id) {
      return db.query(`select * from goods_detail_list where goods_id=${query.goods_id}`, (err, data) => {
        if (err) throw err
        console.log(data);
        data.map(val => {
          val.goods_small_logo = baseUrl + val.goods_small_logo
        })
        // let newdata = []
        // for (let i = 0; i < query.pagesize; i++) {
        //   newdata = [...newdata, data[(query.pagenum - 1) * query.pagesize + i]]
        // }
        resolve(data)
      })
    }
  })
  let mydata1 = await new Promise((resolve, reject) => {
    if (query.goods_id) {
      return db.query(`select * from pics where goods_id=${query.goods_id}`, (err, data) => {
        if (err) throw err
        console.log(data);
        data.map(val => {
          val.pics_mid = baseUrl + val.pics_mid
        })
        // let newdata = []
        // for (let i = 0; i < query.pagesize; i++) {
        //   newdata = [...newdata, data[(query.pagenum - 1) * query.pagesize + i]]
        // }
        resolve(data)
      })
    }

  })
  mydata = mydata[0]
  mydata.pics = [...mydata1]
  ctx.body = {
    message: {
      ...mydata
    }
  }
})
module.exports = goods
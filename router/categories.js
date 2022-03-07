const categories = require('koa-router')()
const db = require('../utils/db')

const baseUrl = require('../utils/baseUrl')
categories.get('/', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from category_list where cat_level=0`, (err, data) => {
      if (err) throw err
      data.map((val) => {
        // val.cat_icon = baseUrl + val.cat_icon

      })
      resolve(data)
    })
  })
  for (let i = 0; i < mydata.length; i++) {
    let mydata2 = await new Promise((resolve, reject) => {
      return db.query(`select * from category_list where cat_pid=${mydata[i].cat_id}`, (err, data) => {
        if (err) throw err
        // console.log(val.cat_id);
        // console.log(data);
        resolve(data)
        // data.map(async (val1) => {
        //   // val.cat_icon = baseUrl + val.cat_icon

        // })
      })
    })

    // console.log(mydata2);
    mydata[i].children = [...mydata2]
    for (let j = 0; j < mydata[i].children.length; j++) {
      let mydata3 = await new Promise((resolve, reject) => {
        return db.query(`select * from category_list where cat_pid=${mydata[i].children[j].cat_id}`, (err, data) => {
          if (err) throw err
          // console.log(val.cat_id);
          // console.log(data);
          resolve(data)
          data.map(val => {
            val.cat_icon = baseUrl + val.cat_icon

          })
        })
      })

      // console.log(mydata2);
      mydata[i].children[j].children = [...mydata3]
    }
  }

  console.log(mydata);
  ctx.body = {
    message: [...mydata]
  }
  // console.log(ctx.body);
})
module.exports = categories
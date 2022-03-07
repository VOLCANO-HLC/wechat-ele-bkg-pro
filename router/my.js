//所有 my请求
const db = require('../utils/db')
const my = require('koa-router')()
const baseUrl = require('../utils/baseUrl')
const bodyparser = require('koa-bodyparser')//获取post请求参数的中间件
my.use(bodyparser())
my.get('/', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  console.log(ctx);
  let query = ctx.query
  console.log(query);
  ctx.body = {
    data: [
      { 'meg': '收到my请求，返回数据' }
    ]
  }
})
my.post('/orders/create', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let hh = ctx.request.body
  // console.log(hh); 
  let time = new Date().getTime().toString()
  // console.log(ctx);
  let token = ctx.request.header.authorization
  let order_number = 'VOL' + time + token.substr(0, 5)
  console.log(ctx.request.header.authorization);//获得token
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`insert into order_list_1 (consignee_addr,order_price,create_time,token,order_number) values ('${hh.consignee_addr}',${hh.order_price},'${time}','${token}','${order_number}') `, (err, data) => {
      if (err) throw err
      // console.log(data, 'users');
      resolve(data)
    })
  })
  console.log(mydata.insertId, 'id');
  let id = mydata.insertId
  console.log(hh.goods);
  for (let i = 0; i < hh.goods.length; i++) {
    let mydata1 = await new Promise((resolve, reject) => {
      return db.query(`insert into order_list_2  values (${id},${hh.goods[i].goods_id},${hh.goods[i].goods_number},${hh.goods[i].goods_price}) `, (err, data) => {
        if (err) throw err
        // console.log(data, 'users');
        resolve(data)
      })
    })
  }

  // console.log(query);
  // console.log(ctx.request.header.authorization);//获得token
  ctx.body = {
    message: {
      msg: 'success'
    }
  }
})
my.post('/orders/chkOrder', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let hh = ctx.request.body
  // console.log(hh);
  let time = new Date().getTime()
  // console.log(ctx);
  let query = ctx.query
  // console.log(query);
  // console.log(ctx.request.header.authorization);//获得token
  ctx.body = {
    message: {
      msg: 'success'
    }
  }




})

my.post('/orders/req_unifiedorder', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let hh = ctx.request.body
  // console.log(hh);
  let time = new Date().getTime()
  // console.log(ctx);
  let query = ctx.query
  // console.log(query);
  // console.log(ctx.request.header.authorization);//获得token


  ctx.body = {
    message: {
      msg: 'success',

    }
  }


})




my.get('/orders/all', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  // console.log(ctx);
  let query = ctx.query
  let token = ctx.request.header.authorization//获得token

  console.log(query.type);//传递的参数
  console.log(token);
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from order_list_1 where token='${token}' ORDER BY create_time desc`, (err, data) => {
      if (err) throw err
      // console.log(data, 'users');
      resolve(data)
    })
  })
  for (let i = 0; i < mydata.length; i++) {
    let mydata1 = await new Promise((resolve, reject) => {
      return db.query(`select * from order_list_2 where id=${mydata[i].id}`, (err, data) => {
        if (err) throw err
        // console.log(data, 'users');
        resolve(data)
      })
    })
    mydata[i].goods = mydata1
  }
  console.log(mydata);
  ctx.body = {
    message: {
      msg: 'success',
      orders: [...mydata]
    }
  }


})
my.post('/collect/create', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let hh = ctx.request.body.GoodInfo
  console.log(hh, '收藏');
  let isCollected = ctx.request.body.isCollected
  // console.log(ctx);
  let token = ctx.request.header.authorization
  // let order_number = 'VOL' + time + token.substr(0, 5)
  console.log(ctx.request.header.authorization);//获得token
  // let goods_small_logo = hh.goods_small_logo.replace('')
  let mydata1 = await new Promise((resolve, reject) => {
    return db.query(`select * from collected_list where goods_id=${hh.goods_id} and token='${token}' `, (err, data) => {
      if (err) throw err
      // console.log(data, 'users');
      resolve(data)
    })
  })
  //
  if (!mydata1.length && isCollected) {
    let mydata2 = await new Promise((resolve, reject) => {
      return db.query(`select * from goods_detail_list where goods_id=${hh.goods_id} `, (err, data) => {
        if (err) throw err
        // console.log(data, 'users');
        resolve(data)
      })
    })
    let goods_small_logo = mydata2[0].goods_small_logo

    let mydata = await new Promise((resolve, reject) => {
      return db.query(`insert into collected_list values (${hh.goods_id},'${token}','${hh.goods_name}',${hh.goods_price},'${goods_small_logo}') `, (err, data) => {
        if (err) throw err
        // console.log(data, 'users');
        resolve(data)
      })
    })
    console.log('添加一条记录·');
  } else if (mydata1.length && !isCollected) {
    let mydata = await new Promise((resolve, reject) => {
      return db.query(`delete from collected_list where  goods_id=${hh.goods_id} and token='${token}'`, (err, data) => {
        if (err) throw err
        // console.log(data, 'users');
        resolve(data)
      })
    })
    console.log('删除一条数据');
  }
  else {
    console.log('数据已存在');
  }
  // console.log(mydata.insertId, 'id');
  // let id = mydata.insertId
  // console.log(hh.goods);

  // console.log(query);
  // console.log(ctx.request.header.authorization);//获得token
  ctx.body = {
    message: {
      msg: 'success'
    }
  }
})

my.get('/collect/all', async (ctx) => {
  // console.log(ctx);
  // ctx.body 为响应给前端的内容，即后端接到请求响应后返回给前端的数据对象
  let hh = ctx.request.body
  console.log(hh, '收藏');
  // console.log(ctx);
  let token = ctx.request.header.authorization
  // let order_number = 'VOL' + time + token.substr(0, 5)
  console.log(ctx.request.header.authorization);//获得token
  let mydata = await new Promise((resolve, reject) => {
    return db.query(`select * from collected_list where token='${token}' `, (err, data) => {
      if (err) throw err
      // console.log(data, 'users');
      data.map(val => {
        val.goods_small_logo = baseUrl + val.goods_small_logo
      })
      resolve(data)
    })
  })
  //


  ctx.body = {
    message: {
      list: [...mydata]
    }
  }
})

module.exports = my
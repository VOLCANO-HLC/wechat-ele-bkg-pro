
// 插入多条数据

const db = require('./db')
const fs = require('fs')
const path = require('path')
function addText(arg) {
  return new Promise((resolve, rejects) => {
    let mypath = path.join(__dirname, `../assets/txt/${arg}.txt`)
    fs.readFile(mypath, (err, data) => {
      if (err) throw err
      // console.log(data.toString());
      resolve(data.toString())
    })

  })
}
let fn = async () => {
  let tt = await addText('goods_id_43980')
  // console.log(tt);

  let arr = [{
    goods_id: 43980, goods_introduce: tt,
    goods_name: "海信（Hisense）LED65E7CY 65英寸 4K曲面超高清 人工智慧语音 丰富影视教育资源",
    goods_price: 6399,
  }
  ]
  arr.map(val => {
    let sql = `insert into goods_detail_list values (${val.goods_id},'${val.goods_introduce}','${val.goods_name}',${val.goods_price})`
    db.query(sql, (res) => {
      console.log(res);
    })
  })
}
// fn()
let arr = [
  // { query: '电视', cat_id: 5, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 5, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },

  // { query: '电视', cat_id: 6, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 6, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },

  // { query: '电视', cat_id: 8, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 8, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },

  // { query: '电视', cat_id: 9, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 9, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },

  // { query: '电视', cat_id: 10, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43986, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 13999, goods_small_logo: '/img/goods_list/000000000193373779_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43985, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 6809, goods_small_logo: '/img/goods_list/000000000193373779_1 (1).jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43984, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4699, goods_small_logo: '/img/goods_list/0000000000-000000000606013705_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43982, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 3078, goods_small_logo: '/img/goods_list/000000000826147951_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43981, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 4321, goods_small_logo: '/img/goods_list/0000000000-000000000606020881_1.jpg', },
  // { query: '电视', cat_id: 10, goods_id: 43980, goods_name: '海信(Hisense)LED50MU8600UC 50英寸 4K超高清智能电视 HDR超薄曲面', goods_price: 1332, goods_small_logo: '/img/goods_list/000000000763892698_2.jpg', },

]

// arr.map(val => {
//   let sql = `insert into swiperdata values (${val.goods_id},'${val.image_src}')`
//   db.query(sql, (res) => {
//     console.log(res);
//   })
// })


// arr.map(val => {
//   let sql = `insert into goods_list values ('${val.query}',${val.goods_id},'${val.goods_name}',${val.goods_price},'${val.goods_small_logo}',${val.cat_id})`
//   db.query(sql, (res) => {
//     console.log(res);
//   })
// })

let bb = [
  {
    goods_id: 43980, pics_mid: '/img/pics/000000000763892698_2.jpg'
  },
  { goods_id: 43980, pics_mid: '/img/pics/000000000763892698_1.jpg' },
  { goods_id: 43980, pics_mid: '/img/pics/000000000763892698_2 (1).jpg' },
  { goods_id: 43980, pics_mid: '/img/pics/0070175200-000000000763892698_3.jpg' },
  { goods_id: 43980, pics_mid: '/img/pics/0070175200-000000000763892698_4.jpg' },
  { goods_id: 43980, pics_mid: '/img/pics/0070175200-000000000763892698_5.jpg' },
]

// bb.map(val => {
//   let sql = `insert into pics values (${val.goods_id},'${val.pics_mid}')`
//   db.query(sql, (res) => {

//     console.log(res);
//   })
// })


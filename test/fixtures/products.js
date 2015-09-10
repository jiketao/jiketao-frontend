import _ from "lodash"
import {randomWord, randomContent} from "./util"

let chair = {
  "_id": 0,
  "title": "Chair for fucking",
  "details": {
    "pictures": ["assets/chair.jpg", "assets/arduino.jpg", "assets/dji.jpg", "assets/pig.jpg"],
    price: 100,
    priceRange: {
      min: 40,
      max: 500,
    }
  },
  "content": {},
  "date": "2015-07-28"
}

let arduino = {
  "_id": 0,
  "title": "Arduino",
  "details": {
    "pictures": ["assets/arduino.jpg", "assets/chair.jpg", "assets/dji.jpg", "assets/pig.jpg"],
    price: 100,
    priceRange: {
      min: 40,
      max: 500,
    }
  },
  "content": {},
  "date": "2015-07-28"
}

let dji = {
  "_id": 0,
  "title": "DJI",
  "details": {
    "pictures": ["assets/dji.jpg", "assets/arduino.jpg", "assets/chair.jpg", "assets/pig.jpg"],
    price: 100,
    priceRange: {
      min: 40,
      max: 500,
    }
  },
  "content": {},
  "date": "2015-07-28"
}

let pig = {
  "_id": 0,
  "title": "DJI",
  "details": {
    "pictures": ["assets/pig.jpg", "assets/arduino.jpg", "assets/chair.jpg", "assets/dji.jpg"],
    price: 100,
    priceRange: {
      min: 40,
      max: 500,
    }
  },
  "content": {},
  "date": "2015-07-28"
}

let cadidates = [chair, arduino, dji, pig]

export default function(count) {
  let ret = []
  count = count || Math.random() * 20
  for(let i = 0, len = count; i < len; i++) {
    let index = parseInt(cadidates.length * Math.random())
    let product = _.extend({}, cadidates[index])
    product.title = `${product.title}_${i}`
    product._id = i
    product.content.brief = randomContent()
    product.title = randomWord()
    product.details.upvote = Math.floor(Math.random() * 200000)
    product.details.ext = {
      "闭合方式":	"套脚",
      "风格":	"百搭,时尚休",
      "季节":	"春季",
      "款式":	"单",
      "流行元素":	"纯色,金属装饰",
      "皮质特征":	"磨砂",
      "色系":	"棕色",
      "适用场合":	"日常携带,约会,日常休",
      "销售季":	"15年春季",
      "鞋底材质":	"橡胶",
      "鞋跟形状":	"平跟",
      "头":	"圆",
      "性别":	"男子",
      "制作工艺":	"胶贴皮鞋 "
    }

    ret.push(product)
  }
  return ret
}

import _ from "lodash"
import {randomWord, randomContent} from "./util"

let chair = {
  "_id": 0,
  "title": "Chair for fucking",
  "pictures": ["assets/chair.jpg"],
  "content": {},
  "date": "2015-07-28"
}

let arduino = {
  "_id": 0,
  "title": "Arduino",
  "pictures": ["assets/arduino.jpg"],
  "content": {},
  "date": "2015-07-28"
}

let dji = {
  "_id": 0,
  "title": "DJI",
  "pictures": ["assets/dji.jpg"],
  "content": {},
  "date": "2015-07-28"
}

let pig = {
  "_id": 0,
  "title": "DJI",
  "pictures": ["assets/pig.jpg"],
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
    product.upvote = Math.floor(Math.random() * 200000)
    ret.push(product)
  }
  return ret
}

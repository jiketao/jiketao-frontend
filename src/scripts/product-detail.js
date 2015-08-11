import {log} from "./common/util"
import React from "react"
import Menu from "./components/menu"
import Post from "./components/post"
import CommentBox from "./components/comment-box"
import _ from "lodash"

// To delete
import products from "../../test/fixtures/products.json"
import menus from "../../test/fixtures/menus.json"
import comments from "../../test/fixtures/comments.json"

mock()

let activeIndex = -1
let product = products[0]

function mock() {
  let i = 0
  let comment = comments[0]
  while(i++ < 20) {
    let newComment = _.extend({}, comment)
    newComment._id = i
    newComment.content = newComment.content.repeat(i)
    comments.push(newComment)
  }
}

React.render(
  <div>
    <div className="menu">
      <Menu menus={menus} activeIndex={activeIndex}/>
    </div>
    <div className="content">
      <div className="content-left">
        <Post product={product}/>
        <CommentBox comments={comments}/>
      </div>
      <div className="content-right">
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

import {log} from "./common/util"
import React from "react"
import Menu from "./components/menu"
import Post from "./components/post"
import CommentBox from "./components/comment-box"
import products from "../../test/fixtures/products.json"
import menus from "../../test/fixtures/menus.json"

let activeIndex = -1
let product = products[0]

React.render(
  <div>
    <div className="menu">
      <Menu menus={menus} activeIndex={activeIndex}/>
    </div>
    <div className="content">
      <div className="content-left">
        <Post product={product}/>
        <CommentBox />
      </div>
      <div className="content-right">
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

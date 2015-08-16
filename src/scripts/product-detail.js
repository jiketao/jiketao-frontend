import {log} from "./common/util"
import React from "react"
import Menu from "./components/menu"
import Post from "./components/post"
import CommentBox from "./components/comment-box"
import RecommendationSlider from "./components/recommendation-slider"
import HotTopicSlide from "./components/hot-topic-slide"
import Search from "./components/search"
import Avatar from "./components/avatar"
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

let currentUser = {
  _id: 43123,
  name: "jery",
  avatar: "assets/jerry.gif"
}

React.render(
  <div>
    <div className="nav-bar">
      <Menu menus={menus} activeIndex={activeIndex}/>
      <div className="align-content">
        <Avatar size={32} user={currentUser} />
        <Search />
      </div>
    </div>
    <div className="content">
      <div className="content-left">
        <Post product={product}/>
        <CommentBox comments={comments}/>
      </div>
      <div className="content-right">
        <RecommendationSlider />
        <HotTopicSlide />
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

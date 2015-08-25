import {log} from "./common/util"
import React from "react"
import ProductList from "./components/product-list"
import Menu from "./components/menu"
import Search from "./components/search"
import Avatar from "./components/avatar"
import RecommendationSlider from "./components/recommendation-slider"
import HotTopicSlide from "./components/hot-topic-slide"
import Sku from "./components/sku"

import products from "../../test/fixtures/products.json"

let menus = [
  {name: "所有", url: "/"},
  {name: "电脑", url: "/"},
  {name: "键盘", url: "/"},
  {name: "办公椅", url: "/"},
  {name: "软件", url: "/"},
  {name: "背包", url: "/"},
  {name: "鸡鸡", url: "/"}
]

let currentUser = {
  name: "jery",
  avatar: "assets/jerry.gif"
}

let activeIndex = 0

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
      <Sku/>
      <div className="content-left">
        <ProductList products={products}/>
      </div>
      <div className="content-right">
        <RecommendationSlider />
        <HotTopicSlide />
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

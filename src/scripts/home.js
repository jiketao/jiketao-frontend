import {log} from "./common/util"
import React from "react"
import ProductList from "./components/product-list"
import Menu from "./components/menu"
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

let activeIndex = 0

React.render(
  <div>
    <div className="menu">
    <Menu menus={menus} activeIndex={activeIndex}/>
    </div>
    <div className="content">
      <div className="content-left">
        <ProductList products={products}/>
      </div>
      <div className="content-right">
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

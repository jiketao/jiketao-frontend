import {log} from "./common/util"
import React from "react"
import ProductList from "./components/product-list"
import Menu from "./components/menu"
import products from "../../test/fixtures/products.json"

var menus = [
  {name: "电脑", url: "/"},
  {name: "键盘", url: "/"},
  {name: "办公椅", url: "/"},
  {name: "软件", url: "/"},
  {name: "背包", url: "/"},
]

console.log(products)

React.render(
  <div>
    <div className="menu">
    <Menu menus={menus}/>
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

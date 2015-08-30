import {log} from "./common/util"
import React from "react"
import ProductList from "./components/product-list"
import Menu from "./components/menu"
import Search from "./components/search"
import Avatar from "./components/avatar"
import RecommendationSlider from "./components/recommendation-slider"
import HotTopicSlide from "./components/hot-topic-slide"
import Sku from "./components/sku"
import CateBar from "./components/categories-bar"
import Paginate from "./components/paginate"
import Footer from "./components/footer"
import Mask from "./components/mask"

import productsMock from "../../test/fixtures/products"

import productsAPI from "./apis/products"
import modal from "./common/modal"

let menus = window.menus || [
  {name: "首页", url: "/"},
  {name: "关于", url: "/about"},
  {name: "...", url: "/"}
]
let activeMenuIndex = 0

/*
 * 商品数据，后端吐出
 */
let productCategories = window.productCategories || [
  {name: "所有", _id: 0},
  {name: "电脑", _id: 1},
  {name: "键盘", _id: 2 },
  {name: "办公椅", _id: 3},
  {name: "软件", _id: 4},
  {name: "背包", _id: 5},
  {name: "鸡鸡", _id: 6}
]
let activeProductCategoryId = window.activeProductCategoryId || 0
let products = window.products || productsMock(20)
let totalProuctCount = window.totalProuctCount || 100

/*
 * 文章数据，后端吐出
 */
let postCategories = window.postCategories || [
  {name: "所有", _id: 0},
  {name: "电脑", _id: 1},
  {name: "键盘", _id: 2 },
  {name: "办公椅", _id: 3},
  {name: "软件", _id: 4},
  {name: "背包", _id: 5},
  {name: "鸡鸡", _id: 6}
]
let activePostCategoryId = window.activePostCategoryId || 0
let posts = window.posts || []
let totalPostCount = window.totalPostCount || 100

// let currentUser = {
//   name: "jery",
//   avatar: "assets/jerry.gif"
// }
// <Avatar size={32} user={currentUser} />

var pageCapacity = 10

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus,
      activeMenuIndex,

      productCategories,
      products,
      activeProductCategoryId,
      totalProuctCount,

      postCategories,
      posts,
      activePostCategoryId,
      totalPostCount,

      currentPage: 1,
    }
  }
  onCateChange(cate) {
    this.setState({
      activeProductCategoryId: cate._id,
      currentPage: 1
    }, this.load.bind(this))
  }
  onPageChange(pageNum) {
    this.setState({
      currentPage: pageNum
    }, this.load.bind(this))
  }
  load() {
    if (this.setState.isLoading) return
    this.setState({
      isLoading: true
    })
    productsAPI.getProducts({
      categoryId: this.state.activeProductCategoryId,
      pageNum: this.state.currentPage,
      pageCount: pageCapacity
    }).then((data)=>{
      this.setState({
        products: data.list,
        totalCount: data.totalCount
      })
    }).catch((xhr, res, e)=>{
      modal.show(e)
      this.setState({isLoading: false})
    })
  }
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Menu menus={this.state.menus}
                activeIndex={this.state.activeMenuIndex}/>
          <div className="align-content">
            <Search />
          </div>
        </div>

        <div className="content">
          <Sku/>

          <CateBar categories={this.state.productCategories}
            activeCateId={this.state.activeProductCategoryId}
            onCateChange={this.onCateChange.bind(this)}/>

          <div className="content-left">
            <Mask isShow={this.state.isLoading}/>
            <ProductList products={this.state.products}/>
            <Paginate totalCount={this.state.totalProuctCount}
              pageCapacity={pageCapacity}
              currentPage={this.state.currentPage}
              onPageChange={this.onPageChange.bind(this)}/>
          </div>

          <div className="content-right">
            <RecommendationSlider />
            <HotTopicSlide />
          </div>

        </div>
        <Footer/>
      </div>
    )
  }
}

React.render(<Home/>, document.getElementById("wrapper"))

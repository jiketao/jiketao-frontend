import {log} from "./common/util"
import Menu from "./components/menu"
import Search from "./components/search"
import RecommendationSlider from "./components/recommendation-slider"
import HotTopicSlide from "./components/hot-topic-slide"
import Footer from "./components/footer"
import ProductSummary from "./components/product-summary"
import Specifications from "./components/specifications"
import MarkdownContent from "./components/markdown-content"
import PostLinks from "./components/post-links"
import Disqus from "./components/disqus"

import products from "../../test/fixtures/products"

let menus = window.menus || [
  {name: "首页", url: "/"},
  {name: "关于", url: "/about"},
  {name: "...", url: "/"}
]
let activeMenuIndex = 0

let product = products()[0]
product.details.pictures.push("assets/arduino.jpg")
product.title = "程序员装逼神器－魁地奇飞天扫帚（光轮2001）哈利波特专属，淘宝爆款。"
product.categories = [
  {name: "家具", _id: 1},
  {name: "交通工具", _id: 2},
  {name: "家具", _id: 3},
  {name: "家具", _id: 4},
  {name: "交通工具", _id: 5}
]


class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menus,
      activeMenuIndex
    }
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
          <div className="content-unit">
            <ProductSummary product={product}/>
          </div>
          <div className="content-unit">
            <Specifications specs={product.details.ext}/>
          </div>
          <div className="content-unit">
            <MarkdownContent content={product.content.extended}/>
          </div>
          <div className="content-unit">
            <PostLinks posts={product.posts}/>
          </div>
          <div className="content-unit">
            <Disqus/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

React.render(<ProductDetail/>, document.getElementById("wrapper"))

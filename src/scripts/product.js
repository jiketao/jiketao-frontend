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
          <ProductSummary product={product}/>
          <Specifications specs={product.ext}/>
          <MarkdownContent content={product.content.extended}/>
          <PostLinks posts={product.posts}/>
          <Disqus/>
        </div>
        <Footer/>
      </div>
    )
  }
}

React.render(<ProductDetail/>, document.getElementById("wrapper"))

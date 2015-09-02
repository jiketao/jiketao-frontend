import {log} from "./common/util"
import React from "react"
import Menu from "./components/menu"
import Search from "./components/search"
import RecommendationSlider from "./components/recommendation-slider"
import HotTopicSlide from "./components/hot-topic-slide"
import Footer from "./components/footer"

let menus = window.menus || [
  {name: "首页", url: "/"},
  {name: "关于", url: "/about"},
  {name: "...", url: "/"}
]
let activeMenuIndex = 0

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
          <div className="content-left">
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

React.render(<ProductDetail/>, document.getElementById("wrapper"))

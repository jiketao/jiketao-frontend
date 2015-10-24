import {log} from "./common/util"
import Menu from "./components/menu"
import Post from "./components/post"
import Search from "./components/search"
import MarkdownContent from "./components/markdown-content"
import _ from "lodash"
import Disqus from "./components/disqus"

document.querySelector("title").innerHTML = post.title + "|极客淘"

let activeIndex = -1
let menus = []

React.render(
  <div>
    <div className="nav-bar">
      <Menu menus={menus} activeIndex={activeIndex}/>
      <div className="align-content">
        <Search />
      </div>
    </div>
    <div className="content">
      <div className="content-unit">
        <div className="product-detail">
          <h1 className="heading">{post.title}</h1>
          <MarkdownContent content={post.content.extended}/>
        </div>
      </div>
      <div className="content-unit">
        <Disqus/>
      </div>
    </div>
  </div>,
  document.getElementById("wrapper")
)

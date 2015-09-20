import {log} from "./common/util"
import Menu from "./components/menu"
import Footer from "./components/footer"

let survey = window.survey || {
  title: "这是一个关于啪啪的调查问卷",
  data: [
    ["序号", "你吃了饭吗？", "你有女朋友吗？", "啪啪啪？", "", "", ""],
    ["0", "没", "有", "没有", "", ""],
    ["1", "关你什么事？", "没有", "有", ""],
    ["3", "吃了", "男的", "恭喜你，恭喜你，恭喜你！！", "", "", ""],
    ["4", "吃了", "男的", "恭喜你，恭喜你，恭喜你fadsfadfdfafdafdsafdasfasdfafsd！！", "", "", ""],
    ["5", "没", "有", "没有", "", ""],
    ["6", "关你什么事？", "没有", "有", ""],
    ["7", "吃了", "男的", "恭喜你，恭喜你，恭喜你！！", "", "", ""],
    ["8", "吃了", "男的", "恭喜你，恭喜你，恭喜你fadsfadfdfafdafdsafdasfasdfafsd！！", "", "", ""],
    ["9", "吃了", "男的", "恭喜你，恭喜你，恭喜你fadsfadfdfafdafdsafdasfasdfafsd！！恭喜你，恭喜你，恭喜你fadsfadfdfafdafdsafdasfasdfafsd！！", "", "", ""]
  ]
}

let header = []
survey.data[0].forEach((key) => {
  if (key) {
    header.push(key);
  }
})

let rows = survey.data.slice(1)

class Survey {
  constructor() {
  }
  componentDidMount() {
    document.querySelector("title").innerHTML = survey.title + " | 极客淘"
    new Masonry(document.querySelector("ul.surveys"), {
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.survey-item',
      // use element for option
      columnWidth: '.survey-item',
      percentPosition: true
    })
  }
  render() {
    return (
      <div>
        <div className="nav-bar">
          <Menu menus={[]} activeIndex={0}/>
        </div>
        <div className="content">
          <h1>{survey.title}</h1>
          <ul className="surveys">
          {rows.map((row) => {
            return (
              <li className="survey-item">
                {row.map((value, i) => {
                  if (!value) return;
                  let key = header[i]
                  return (
                    <div className="key-value">
                      <span className="survey-key">{key}</span>：
                      <span>{value}</span>
                    </div>
                  )
                })}
              </li>
            )
          })}
          </ul>
        </div>
        <Footer/>
      </div>
    )
  }
}

React.render(<Survey/>, document.getElementById("wrapper"))

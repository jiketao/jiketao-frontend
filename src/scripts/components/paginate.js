import React from "react"

class Paginate extends React.Component {
  constructor(props) {
    super(props)
  }
  previousPage() {
    return (
      <div className="previous-page page-unit">上一页</div>
    )
  }
  pages() {
    return (
      <div className="pages page-unit">第 1 页</div>
    )
  }
  nextPage() {
    return (
      <div className="next-page page-unit">下一页</div>
    )
  }
  render() {
    return (
      <div className="paginate">
        <div className="paginate-align">
          {this.previousPage()}
          {this.pages()}
          {this.nextPage()}
        </div>
      </div>
    )
  }
}

export default Paginate

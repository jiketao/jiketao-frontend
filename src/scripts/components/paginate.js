import React from "react"

class Paginate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isShow: false}
    this.pageCount = this.recount()
  }
  componentWillUpdate() {
    this.pageCount = this.recount()
  }
  recount() {
    let totalCount = this.props.totalCount
    let pageCapacity = this.props.pageCapacity
    let pageCount = Math.floor(totalCount / pageCapacity)
    if(totalCount % pageCapacity !== 0) pageCount++
    return pageCount
  }
  show() {
    this.setState({isShow: true})
  }
  hide() {
    this.setState({isShow: false})
  }
  pages() {
    var itemsClass = this.state.isShow ? "active": ""
    return (
      <div className="pages page-unit"
           onClick={this.show.bind(this)}
           onMouseLeave={this.hide.bind(this)}>
        <ul className={itemsClass}>
          {this.pageItems()}
        </ul>
        <span className="page-item">第 {this.props.currentPage} 页</span>
      </div>
    )
  }
  selectPage(pageNum, event) {
    event.stopPropagation()
    if (pageNum === this.props.currentPage) {
      return
    }
    this.setState({
      currentPage: pageNum,
      isShow: false
    })
    if (typeof this.props.onPageChange === "function") {
      this.props.onPageChange(pageNum)
    }
  }
  pageItems() {
    let pages = []
    for(let i = this.pageCount; i != 0; i--) {
      let className = (i === this.props.currentPage)
        ? "active"
        : null
      pages.push(
        <li className={className}
            key={i}
            onClick={this.selectPage.bind(this, i)}>
          <span className="page-item">第 {i} 页</span>
        </li>
      )
    }
    return pages
  }
  previousPage() {
    if (this.props.currentPage === 1) return
    return (
      <div className="previous-page page-unit"
           onClick={this.selectPage.bind(this, this.props.currentPage - 1)}>
           上一页
      </div>
    )
  }
  nextPage() {
    if (this.props.currentPage === this.pageCount) {
      return
    }
    return (
      <div className="next-page page-unit"
           onClick={this.selectPage.bind(this, this.props.currentPage + 1)}>
           下一页
      </div>
    )
  }
  render() {
    this.recount()
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

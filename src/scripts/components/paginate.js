import React from "react"

class Paginate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: props.currentPage || 1,
      isHover: false
    };
  }
  previousPage() {
    return (
      <div className="previous-page page-unit">上一页</div>
    )
  }
  show() {
    this.setState({isHover: true})
  }
  hide() {
    this.setState({isHover: false})
  }
  pages() {
    var itemsClass = this.state.isHover ? "active": ""
    return (
      <div className="pages page-unit"
           onClick={this.show.bind(this)}
           onMouseLeave={this.hide.bind(this)}>
        <ul className={itemsClass}>
          {this.pageItems()}
        </ul>
        <span className="page-item">第 {this.state.currentPage} 页</span>
      </div>
    )
  }
  selectPage(pageNum, event) {
    event.stopPropagation()
    if (pageNum === this.state.currentPage) {
      return
    }
    this.setState({
      currentPage: pageNum,
      isHover: false
    })
    if (typeof this.props.onPageChange === "function") {
      this.props.onPageChange(pageNum)
    }
  }
  pageItems() {
    let totalCount = this.props.totalCount
    let pageCapacity = this.props.pageCapacity
    let pageCount = Math.floor(totalCount / pageCapacity)
    if(totalCount % pageCapacity !== 0) pageCount++
    let pages = []
    for(let i = pageCount; i != 0; i--) {
      let className = (i === this.state.currentPage)
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

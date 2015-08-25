import React from "react"

class CateBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {activeCateIndex: this.props.activeCateIndex || 0}
  }
  onActivate(i, item) {
    this.setState({
      activeCateIndex: i
    })
    if (this.props.onCateChange) {
      this.props.onCateChange(item)
    }
  }
  getCateItems() {
    return this.props.categories.map((item, i) => {
      let className = (i === this.state.activeCateIndex)
        ? "category-item active"
        : "category-item"
      return (
        <li className={className} onClick={this.onActivate.bind(this, i, item)}>
            {item.name}
        </li>
      )
    })
  }
  render() {
    return (
      <div className="categories-bar">
        <ul>
          {this.getCateItems()}
        </ul>
      </div>
    )
  }
}

export default CateBar

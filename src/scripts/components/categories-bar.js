import React from "react"

class CateBar extends React.Component {
  constructor(props) {
    super(props)
  }
  onActivate(i, item) {
    if (this.props.onCateChange) {
      this.props.onCateChange(item)
    }
  }
  getCateItems() {
    return this.props.categories.map((item, i) => {
      let className = (item._id === this.props.activeCateId)
        ? "category-item active"
        : "category-item"
      return (
        <li className={className}
            key={item._id}
            onClick={this.onActivate.bind(this, i, item)}>
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

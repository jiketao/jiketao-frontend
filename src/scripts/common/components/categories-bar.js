/**
 * 分类
 */

var CateBar =  React.createClass({
  getInitialState() {
    return {
      showMore: false
    }
  },
  showAllItems() {
    var categories = this.props.categories.slice(10, -1);
    if (this.state.showMore) {
      return this.getCateItems(categories)
    } else {
      return null
    }
  },
  getCateItems() {
    var categories = this.props.categories;

    if (!this.state.showMore) {
      categories = categories.slice(0, 10)
    }

    return categories.map((item, i) => {
      let className = (item._id === this.props.activeCateId)
        ? "category-item active"
        : "category-item"
      return (
        <li className={className}
            key={item._id}
            onClick={this.onActivate.bind(this, i, item)}
            onTouchStart={this.onActivate.bind(this, i, item)}>
            {item.name}
        </li>
      )
    })
  },
  render() {
    console.log(this.state)
    var $more = <span className="more" onClick={this.toggleMore}>查看更多</span>;
    if (this.state.showMore) {
      $more = <li><span className="more" onClick={this.toggleMore}>收起</span></li>
    }
    return (
      <div className="categories-bar">
        <ul>
          {this.getCateItems()}
          {this.showAllItems()}
          {$more}
        </ul>
      </div>
    )
  },
  onActivate(i, item) {
    if (this.props.onCateChange) {
      this.props.onCateChange(item)
    }
  },
  toggleMore() {
    console.log('hahha')
    this.setState({
      showMore: !this.state.showMore
    });
  }
})

export default CateBar

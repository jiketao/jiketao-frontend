class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="product">
          <div className="item-right">
            <img src={this.props.product.details.pictures[0]}/>
          </div>

          <div className="item-left">
            <h3 className="item-title">
              <a href={"/products/" + this.props.product._id}>
              {this.props.product.title}
              </a>
            </h3>
            <p className="item-content">
              {this.props.product.content.brief}...
            </p>
            <div className="item-info">
              <span className="item-publish-date">
                {this.props.product.date} 发布
              </span>| &nbsp;
              <span className="item-publish-upvote">
                {this.props.product.details.upvote} 人觉得很赞
              </span>
            </div>
          </div>
       </div>
     )
  }
}

export default Product

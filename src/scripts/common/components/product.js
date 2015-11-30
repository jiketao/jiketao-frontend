class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var product = this.props.product;
    product.details.pictures = product.details.picUrl.split('\n') || [];
    return (
      <div className="product">
          <div className="item-right">
            <img src={product.details.pictures[0]}/>
          </div>

          <div className="item-left">
            <h3 className="item-title">
              <a href={"/products/" + product._id}>
              {product.title}
              </a>
            </h3>
            <p className="item-content">
              {product.content.brief}...
            </p>
            <div className="item-info">
              <span className="item-publish-date">
                {product.date} 发布
              </span>| &nbsp;
              <span className="item-publish-upvote">
                {product.details.upvote} 人觉得很赞
              </span>
            </div>
          </div>
       </div>
     )
  }
}

export default Product

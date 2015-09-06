import ProductPicture from "./product-picture"

class ProductSummary extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className="product-summary">
        <div className="summary-left">
          <div className="product-picture-align">
            <ProductPicture pictures={this.props.product.details.pictures}/>
          </div>
          <div className="product-profile">
            <h3>{this.props.product.title}</h3>
            <section>
              <span className="name">参考价格</span>
              <span className="value money">
                <i className="RMB"></i>{this.props.product.details.price}
              </span>
            </section>
            <section>
              <span className="name">价格范围</span>
              <span className="value money">
                  <i className="RMB"></i>{this.props.product.details.priceRange.min} ~&nbsp;
                  <i className="RMB"></i>{this.props.product.details.priceRange.max}
              </span>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSummary

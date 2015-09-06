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
          <ProductPicture pictures={this.props.product.pictures}/>
        </div>
      </div>
    )
  }
}

export default ProductSummary

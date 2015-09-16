import ProductPicture from "./product-picture"
import Tag from "./tag"
import {resize} from "../common/util"

class ProductSummary extends React.Component {
  constructor(props) {
    super(props)
    resize(this.forceUpdate.bind(this))
  }
  getStyles() {
  }
  render() {
    this.getStyles()
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
            <section className="tags">
              <span className="name">产品分类</span>
              <span className="value">
              {this.props.product.categories.map((tag)=> {
                return <Tag tagName={tag.name} key={tag._id}/>
              })}
              </span>
            </section>
            <section className="content-area">
              <h4 className="name">简介</h4>
              <p className="value money">
                {this.props.product.content.brief}
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSummary

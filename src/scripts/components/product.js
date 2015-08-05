import React from "react"

class Product extends React.Component {
  componnen

  render() {
    return (
      <div className="product">
          <div className="item-left">

            <div className="item-name">{this.props.product.title}</div>
            <div className="item-content">{this.props.product.content.brief}</div>

            <div className="item-info">
              <div className="item-publish-date">
                {this.props.product.date}
              </div>
              <div className="item-publish-date">
                {this.props.product.upvote}
              </div>
            </div>
          </div>
          <div className="item-right">
            <img src={this.props.product.picUrl}/>
          </div>
       </div>
     )
  }
}

export default Product

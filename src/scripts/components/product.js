import React from "react"

class Product extends React.Component {
  componnen

  render() {
    return (
      <div className="product">
          <div className="item-left">

            <h3 className="item-title">{this.props.product.title}</h3>
            <p className="item-content">{this.props.product.content.brief}</p>

            <div className="item-info">
              <span className="item-publish-date">
                {this.props.product.date} 发布
              </span>
              <span className="item-publish-upvote">
                （{this.props.product.upvote} 人觉得很赞）
              </span>
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

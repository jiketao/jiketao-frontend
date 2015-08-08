import React from "react"
import Product from "./product"

class ProductList extends React.Component {
  constructor() {
    super()
  }
  render() {
    let listProcut = ()=> {
      return (
        this.props.products.map((product)=>{
          return (
            <Product product={product} key={product._id}/>
          )
        })
      )
    }
    return (
      <div>
        {listProcut()}
      </div>
    )
  }
}

export default ProductList

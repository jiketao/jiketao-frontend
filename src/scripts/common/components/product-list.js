import Product from "./product"

class ProductList extends React.Component {
  constructor() {
    super()
  }
  render() {
    let listProcut = ()=> {
      if (!this.props.products) {
        return '';
      }
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

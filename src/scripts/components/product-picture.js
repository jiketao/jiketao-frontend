class ProductPicture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }
  onSelectPicture(i) {
    this.setState({
      activeIndex: i
    })
  }
  render() {
    return (
      <div className="product-picture">
        <img className="show" src={this.props.pictures[this.state.activeIndex]}/>
        <ul className="img-list">
        {this.props.pictures.map((pic, i) => {
          let className = "item"
          if (i === 0) {
            className += " item-first"
          } else if (i === this.props.pictures.length - 1) {
            className += " item-last"
          }
          if (i === this.state.activeIndex) {
            className += " active"
          }
          return (
            <li className={className} onClick={this.onSelectPicture.bind(this, i)}>
              <img className="item-img" src={pic}/>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default ProductPicture

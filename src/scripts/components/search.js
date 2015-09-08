class Search extends React.Component {
  constructor() {
    super()
  }
  render() {
    let placeholder = "嗖～！"
    return (
      <div className="search">
        <input type="text" placeholder={this.props.placeholder || placeholder}/>
        <span className="search-icon center">
          <i className="fa fa-search"></i>
        </span>
      </div>
    )
  }
}

export default Search

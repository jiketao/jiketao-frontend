class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  getItems() {
    if (this.props.menus.length !== 0) {
      return (
        <ul className="menus">
        {this.props.menus.map((item, index)=> {
          return (
            <li className="menu-item" key={index}>
              <a className={index === this.props.activeIndex ? "active" : ""}
                 href={item.url}>
                {item.name}
              </a>
            </li>
          )
        })
        }</ul>
      )
    } else {
      return (<span/>)
    }
  }
  render() {
    <h1><a href="/">极客淘</a></h1>
    return (
      <div className="menus-wrapper">
      </div>
    )
  }
}

export default Menu

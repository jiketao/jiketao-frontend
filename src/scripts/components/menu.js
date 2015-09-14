class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="menus-wrapper">
        <h1><a href="/">极客淘</a></h1>
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
      </div>
    )
  }
}

export default Menu

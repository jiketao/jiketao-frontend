import React from "react"

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className="menus">
      <li className="logo">
        <h1><a href="/">极客淘</a></h1>
      </li>{
      this.props.menus.map((item, index)=> {
        return (
          <li className="menu-item">
            <a className={index === this.props.activeIndex ? "active" : ""}
               href={item.url}>
              {item.name}
            </a>
          </li>
        )
      })
      }</ul>
    )
  }
}

export default Menu

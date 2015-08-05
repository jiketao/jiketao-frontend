import React from "react"

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul className="menus">
      <li className="menu-item logo">极客淘</li>{
      this.props.menus.map(function(item) {
        return (
          <li className="menu-item">
            <a href={item.url}>{item.name}</a>
          </li>
        )
      })
      }</ul>
    )
  }
}

export default Menu

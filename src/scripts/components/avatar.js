import React from "react"

/**
 * @usage:
 *
 * let currentUser = {
 *    name: "jery",
 *   avatar: "assets/jerry.gif"
 * }
 * <Avatar size={32} user={currentUser} />
 */

class Avatar extends React.Component {
  constructor() {
    super()
  }
  render() {
    var size = (this.props.size || 48) + "px"
    var style = {height: size, width: size}
    return (
      <a href={"/users/" + this.props.user._id}>
        <img
          className="avatar"
          style={style}
          src={this.props.user.avatar}/>
      </a>
    )
  }
}

export default Avatar

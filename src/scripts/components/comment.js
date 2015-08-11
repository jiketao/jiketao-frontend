import React from "react"

class Comment extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="comment">
        <img className="avatar" src={this.props.comment.user.avatar}/>
        <div className="comment-right">
          <div className="comment-info">
            <span className="comment-username">
              {this.props.comment.user.name}
            </span>
            <span className="comment-date">
              {this.props.comment.date}
            </span>
          </div>
          <p className="comment-content">
            {this.props.comment.content}
          </p>
        </div>
      </div>
    )
  }
}

export default Comment

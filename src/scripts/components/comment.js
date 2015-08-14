import React from "react"

class Comment extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="comment">
        <a href={"/users/" + this.props.comment.user._id}>
          <img className="avatar" src={this.props.comment.user.avatar}/>
        </a>
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
          <div className="comment-tools">
            <span className="comment-tool-unit comment-reply-count">
              <a hrf="#">回复（10）</a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment

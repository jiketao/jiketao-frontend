import Avatar from "./avatar"

class Comment extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="comment">
        <Avatar user={this.props.comment.user}/>
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

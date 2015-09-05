import Comment from "./comment"

class CommentBox extends React.Component {
  constructor() {
    super()
  }
  handleOnFocus(e) {
    var textarea = React.findDOMNode(this.refs.textarea)
    textarea.className = "focus"
  }
  handleOnBlur(e) {
    var textarea = React.findDOMNode(this.refs.textarea)
    if (textarea.value.length !== 0) return
    textarea.className = "blur"
  }
  getComments() {
    return this.props.comments.map((comment, i)=> {
      return (
        <Comment key={comment._id} comment={comment} />
      )
    })
  }
  render() {
    return (
      <div className="comment-box">

        <div className="comment-textarea">
          <div>
            <textarea
              ref="textarea"
              onBlur={this.handleOnBlur.bind(this)}
              onFocus={this.handleOnFocus.bind(this)}
              placeholder="说点什么.."></textarea>
          </div>
          <button className="button">发布评论</button>
        </div>

        <div className="comments">
          {this.getComments()}
        </div>

      </div>
    )
  }
}

export default CommentBox

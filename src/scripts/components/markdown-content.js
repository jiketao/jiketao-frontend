class MarkdownContent extends React.Component {
  constructor(props) {
    super(props)
  }
  getContent() {
    return {__html: this.props.content}
  }
  render() {
    return (
      <div className="markdown-content" dangerouslySetInnerHTML={this.getContent()}></div>
    )
  }
}

export default MarkdownContent

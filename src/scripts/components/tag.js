
class Tag extends React.Component {
  constructor(props) {
    super(props)
  }
  onTagClick() {
    this.props.onTagClick && this.props.onTagClick(this.props.tagName)
  }
  render() {
    return (
      <span className="tag" onClick={this.onTagClick.bind(this)}>
        {this.props.tagName}
      </span>
    )
  }
}

export default Tag

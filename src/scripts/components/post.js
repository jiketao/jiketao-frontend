class Post extends React.Component {
  constructor() {
    super()
  }
  render() {
    let getContent = ()=> {
      // show HTML result from markdown render result of server.
      return {__html: this.props.product.content.extended}
    }
    return (
      <div className="post"
           dangerouslySetInnerHTML={getContent()} />
    )
  }
}

export default Post

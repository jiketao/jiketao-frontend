class Mask extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let className = this.props.isShow
      ? "mask show"
      : "mask"
    return (
      <div className={className}></div>
    )
  }
}

export default Mask

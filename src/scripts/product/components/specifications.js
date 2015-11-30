class Specifications extends React.Component {
  constructor(pros) {
    super(pros)
  }
  render() {
    return (
      <div className="specifications">
        <h4>产品参数</h4>
        {Object.keys(this.props.specs).map((key) => {
          return (
            <section>
              <span className="name">
                {key}
              </span>
              <span className="value">
                {this.props.specs[key]}
              </span>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Specifications

class Sku extends React.Component {
  constructor(props) {
    super(props)
  }
  getStyles(width, height, gap) {
    var borders = 1 * 2
    var innerWidth = width / 2
    return {
      overview: {
        "width": `${width}px`,
        "height": `${height}px`
      },
      right: {
        "width": `${(width - gap - borders) / 2}px`,
        "marginLeft": `${gap}px`
      },
      left: {
        "width": `${(width - gap) / 2}px`
        //"marginRight": `${gap / 2}px`
      },
      rightUp: {
        "height": `${(height - gap) / 2}px`,
        "marginBottom": `${gap}px`
      },
      rightBottom: {
        "height": `${(height - gap) / 2}px`
        //"marginTop": `${gap / 2}px`
      },
      rightBottomLeft: {
        "width": `${(innerWidth - gap) / 2 - borders}px`,
        "marginRight": `${gap}px`
      },
      rightBottomRight: {
        "width": `${(innerWidth - gap) / 2 - borders}px`
        //"marginRight": `${marginRight}px`
      }
    }
  }
  render() {
    let width = this.props.width || 960
    let height = this.props.height || 400
    let gap = 5
    let styles = this.getStyles(width, height, gap)
    return (
      <div className="sku" style={styles.overview}>
        <a href={this.props.skus[0].url} target="_blank">
          <div className="sku-left" style={styles.left}>
            <img src={this.props.skus[0].picture} className="pic"/>
          </div>
        </a>
        <div className="sku-right" style={styles.right}>
          <a href={this.props.skus[1].url} target="_blank">
            <div className="sku-right-up" style={styles.rightUp}>
              <img src={this.props.skus[1].picture} className="pic"/>
            </div>
          </a>
          <div className="sku-right-bottom" style={styles.rightBottom}>
            <a href={this.props.skus[2].url} target="_blank">
              <div className="sku-right-bottom-left" style={styles.rightBottomLeft}>
                <img src={this.props.skus[2].picture} className="pic"/>
              </div>
            </a>
            <a href={this.props.skus[3].url} target="_blank">
              <div className="sku-right-bottom-right" style={styles.rightBottomRight}>
                <img src={this.props.skus[3].picture} className="pic"/>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sku

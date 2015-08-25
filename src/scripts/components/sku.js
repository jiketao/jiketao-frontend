import React from "react"

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
        <div className="sku-left" style={styles.left}>
          left
        </div>
        <div className="sku-right" style={styles.right}>
          <div className="sku-right-up" style={styles.rightUp}>
            right-up
          </div>
          <div className="sku-right-bottom" style={styles.rightBottom}>
            <div className="sku-right-bottom-left" style={styles.rightBottomLeft}>
              right-bottom-left
            </div>
            <div className="sku-right-bottom-right" style={styles.rightBottomRight}>
              right-bottom-right
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sku

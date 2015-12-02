/**
 * Paginate 
 */
import Fluxxor from 'fluxxor'

var Paginate = React.createClass({
  mixins: [Fluxxor.FluxMixin(React)],
  componentWillUpdate() {
    window.scrollTo(document.body, 0)
  },
  render() {
    return (
      <div className="paginate">
        <div className="paginate-align">
          {this.previousPage()}
          {this.nextPage()}
        </div>
      </div>
    )
  },
  previousPage() {
    var className = ''
    if (this.props.data.currentPage === 1) {
      className = 'disabled'
    }
    return (
      <div className={"previous-page page-unit " + className}
           onTouchStart={this.selectPage.bind(this, this.props.data.currentPage - 1)}
           onClick={this.selectPage.bind(this, this.props.data.currentPage - 1)}>
           上一页
      </div>
    )
  },
  nextPage() {
    var className = ''
    if (this.props.data.currentPage === this.props.data.totalCount) {
      className += 'disabled'
    }
    return (
      <div className={"next-page page-unit " + className}
           onClick={this.selectPage.bind(this, this.props.data.currentPage + 1)}
           onTouchStart={this.selectPage.bind(this, this.props.data.currentPage + 1)}>
           下一页
      </div>
    )
  },
  selectPage(page) {
    if (page <= 0 || page > this.props.data.totalCount) {
      return
    }

    var flux = this.getFlux()
    flux.actions.selectPage(page)

  }
})

export default Paginate

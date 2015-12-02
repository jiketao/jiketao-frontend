/*==========================
 + 首页应用
 *==========================*/
// import {makeSkuMap} from "./common/util"
import ProductList from "./common/components/product-list"
import Menu from "./common/components/menu"
import Search from "./common/components/search"
import Sku from "./common/components/sku"
import Avatar from "./common/components/avatar"
import RecommendationSlider from "./common/components/recommendation-slider"
import HotTopicSlide from "./common/components/hot-topic-slide"
import CateBar from "./common/components/categories-bar"
import Paginate from "./common/components/paginate"
import Footer from "./common/components/footer"
import Mask from "./common/components/mask"
import modal from "./common/modal"
import Fluxxor from 'fluxxor'
import AppStore from './home/store'
import AppAction from './home/actions'

var stores = {
    AppStore: new AppStore()
};
var flux = new Fluxxor.Flux(stores, AppAction);
var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;
/**
 * App Component
 */
var App = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin("AppStore")],
    getStateFromFlux() {
        var flux = this.getFlux()
        return flux.store('AppStore').getState()
    },
    componentDidMount() {
        console.log(this.state)
        this.load();
    },
    load() {
        var flux = this.getFlux()
        flux.actions.initalizeAppData();
    },
    render() {
        var data = this.state.data;
        return (
            <div> 
                <div className = "nav-bar" > 
                    <Menu menus = {data.menus } activeIndex = {data.activeMenuIndex } /> 
                    <div className = "align-content" > 
                        <Search/>
                    </div> 
                </div> 
                <div className="content">
                    <Sku skus={data.skus}/>
                    <CateBar ref="catebar"
                        categories={data.productCategories}
                        activeCateId={data.activeProductCategoryId}/>
                    <div className="content-left">
                        <ProductList products={data.products}/>
                        <Mask isShow={false}/>
                        <Paginate data={data.paginate}/>
                    </div>

                    <div className="content-right">
                        <RecommendationSlider />
                        <HotTopicSlide />
                    </div>
                </div>
                <Footer/>
            </div>)
    }
});

flux.on("dispatch", function(type, payload) {
    console.log("[Dispatch]", type, payload);
});
React.render( <App flux = {flux}/>,  document.getElementById('wrapper'));
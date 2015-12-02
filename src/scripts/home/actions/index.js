/**
 * action
 */
import productsAPI from "../../service/products"
// import productsMock from "../../test/fixtures/products"

var actions = {
	dispatch(type, data) {
		console.log('dispatch');
		this.dispatch(type, data);
	},
	selectPage(page) {
		var self = this;
		productsAPI.getProducts({
			pageNum: Math.max(1, page),
			pageCount: 10
		})
		.then(function(response) {
			var productResponseData = response.body.data;
			var data = {
				products: productResponseData.list,
				paginate: {
					currentPage: productResponseData.currentPage ,
					totalCount: productResponseData.totalCount
				}
			};
			self.dispatch('loadPageData', data);
		})
	},
	initalizeAppData() {
		// this.dispatch('loadPageData', {});
		var self = this;
		Promise.all([
			productsAPI.getProductCategories(),
			productsAPI.getProducts({
				pageNum: 1,
				pageCount: 10,
			})
		])
		.then(function(responses) {
			var productResponseData = responses[1].body.data;
			var data = {
				productCategories: responses[0].body.data,
				products: productResponseData.list,
				paginate: {
					currentPage: 1,
					totalCount: productResponseData.totalCount
				}
			};
			console.log(data);
			self.dispatch('loadPageData', data);
		})
		.catch(function(err) {
			console.log(err);
		})
	}
};

export default actions;
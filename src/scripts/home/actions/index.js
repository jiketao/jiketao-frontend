/**
 * action
 */
import productsAPI from "../../service/products"
// import productsMock from "../../test/fixtures/products"

var actions = {
	dispatch: function(type, data) {
		console.log('dispatch');
		this.dispatch(type, data);
	},
	initalizeAppData: function() {
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
			var data = {
				productCategories: responses[0].body.data,
				products: responses[1].body.data
			};
			self.dispatch('loadPageData', data);
		})
		.catch(function(err) {
			console.log(err);
		})
	}
};

export default actions;
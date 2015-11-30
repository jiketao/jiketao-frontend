import request from "./request"

var DEV = true;
var host = DEV ? 'http://localhost:3000/': 'http://geeektao.com/';

/**
 * [getProducts description]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
function getProducts(params) {
  return request.get(host + "api/products", params)
    .set('Accept', 'application/json')
    .end()
}

/**
 * [getProductCategories description]
 * @return {[type]} [description]
 */
function getProductCategories() {
	return request.get( host + 'api/products/categories')
		.set('Accept', 'application/json')
		.end();
}

export default {
  getProducts,
  getProductCategories
}

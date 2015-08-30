import products from "../test/fixtures/products"

function init(app) {
  app.get("/products", function(req, content, callback) {
    callback(null, {
      list: products(20),
      totalCount: 100 + Math.floor(100 * Math.random())
    })
  })
}

module.exports = init

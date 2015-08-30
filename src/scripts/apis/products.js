import request from "./request"

function getProducts(params) {
  return request.get("/products", params)
    .set('Accept', 'application/json')
    .end()
}

export default {
  getProducts
}

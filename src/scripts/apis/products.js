import qwest from "qwest"

function getProducts(params) {
  return qwest.get("/products", params)
}

export default {
  getProducts
}

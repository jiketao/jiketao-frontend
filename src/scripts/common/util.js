export function log(info) {
  console.log(info)
}

export function makeSkuMap(skus) {
  var map = {}
  skus.forEach(function(sku) {
    map[sku.name] = sku
  })
  return map
}

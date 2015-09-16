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

let fns = []
let timer = null
window.addEventListener("resize", () => {
  clearTimeout(timer)
  timer = setTimeout(() => {
    fns.forEach(function(fn) {
      fn()
    })
  }, 200)
}, false)

export function resize(fn) {
  fns.push(fn)
}

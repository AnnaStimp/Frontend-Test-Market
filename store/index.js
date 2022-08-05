export const state = () => ({
  products: []
})
  
export const mutations = {
  addProduct (state, product) {
    state.products.push(product)
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  deleteProduct (state, id) {
    state.products = state.products.filter((el) => !(el.id == id))
    localStorage.setItem('products', JSON.stringify(state.products))
  },
  changeProducts (state, products) {
    state.products = products || []
  }
}
  
export const actions = {
}
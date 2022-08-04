export const state = () => ({
  products: []
})
  
export const mutations = {
  addProduct (state, product) {
    state.products.push(product)
  },
  deleteProduct (state, id) {
    state.products = state.products.filter((el) => !(el.id == id))
    console.log(state.products, id)
  }
}
  
export const actions = {
}
<template>
  <div class="main">
    <AddProductForm :fixFormAddProduct="fixFormAddProduct"/>
    <CardsOfProduct />
  </div>
</template>

<script>
import AddProductForm from '@/components/AddProductForm/AddProductForm.vue'
import CardsOfProduct from '@/components/CardsOfProduct/CardsOfProduct.vue'

export default {
  name: 'MainPage',
  components: {
    AddProductForm,
    CardsOfProduct
  },
  data() {
    return {
      fixFormAddProduct: false
    }
  },
  mounted () {
    this.$store.commit('changeProducts', JSON.parse(localStorage.getItem('products')))
  }
}
</script>

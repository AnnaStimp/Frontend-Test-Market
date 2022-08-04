<template>
  <div class="main">
    <AddProduct :fixFormAddProduct="fixFormAddProduct"/>
    <CardsOfProduct />
  </div>
</template>

<script>
import AddProduct from '@/components/AddProduct/AddProduct.vue'
import CardsOfProduct from '@/components/CardsOfProduct/CardsOfProduct.vue'

export default {
  name: 'MainPage',
  components: {
    AddProduct,
    CardsOfProduct
  },
  data() {
    return {
      fixFormAddProduct: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop >= 59) {
        this.fixFormAddProduct = true
      } else {
        this.fixFormAddProduct = false
      }
    })
  }
}
</script>

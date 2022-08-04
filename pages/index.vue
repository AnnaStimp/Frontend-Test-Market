<template>
  <div class="main">
    <AddProduct />
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
  }
}
</script>

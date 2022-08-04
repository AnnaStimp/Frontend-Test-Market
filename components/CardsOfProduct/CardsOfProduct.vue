<template>
  <div class="cardsOfProduct">
    <div class="cardsOfProduct__filter" :class="{open: openMenu}">
      <div class="cardsOfProduct__filter__main" @click="openMenu = !openMenu">
        <p>{{ filterParams.find((el) => el.id == selectParam).name }}</p>
        <img src="@/assets/arrow_custom.svg" alt="">
      </div>
      <div class="cardsOfProduct__filter__menu">
        <p v-for="param in filterParams.filter((el) => !(el.id == selectParam))" :key="param.id" @click="selectParam = param.id; openMenu = false">{{ param.name }}</p>
      </div>
    </div>
    <div class="cardsOfProduct__items">
      <div class="cardsOfProduct__items__item" v-for="product in $store.state.products" :key="product.id">
        <img :src="product.img" alt="">
        <div class="cardsOfProduct__items__item__text">
          <p class="cardsOfProduct__items__item__text__name">{{ product.name }}</p>
          <p class="cardsOfProduct__items__item__text__about">{{ product.about }}</p>
          <p class="cardsOfProduct__items__item__text__price">{{ product.price }} руб.</p>
        </div>
        <div class="cardsOfProduct__items__item__delete" @click="$store.commit('deleteProduct', product.id)">
          <img src="@/assets/delete.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './cardsOfProduct.scss'

export default {
  name: 'CardsOfProduct',
  data () {
    return {
      filterParams: [
        {
          id: 1,
          name: 'По умолчанию'
        },
        {
          id: 2,
          name: 'По возрастанию цены'
        },
        {
          id: 3,
          name: 'По убывнию цены'
        },
        {
          id: 4,
          name: 'По наименованию'
        }
      ],
      selectParam: 4,
      openMenu: false
    }
  },
  methods: {
    deleteProduct(id) {
      console.log(id)
      console.log(this.$store.state.products)
    }
  }
}
</script>
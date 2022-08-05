<template>
  <div class="cardsOfProduct">
    <div class="cardsOfProduct__filter" :class="{open: openMenu}">
      <div class="cardsOfProduct__filter__main" @click="openMenu = !openMenu">
        <p>{{ filterParams.find((el) => el.id == selectParam).name }}</p>
        <img src="@/assets/arrow_custom.svg" alt="">
      </div>
      <div class="cardsOfProduct__filter__menu">
        <p v-for="param in filterParams.filter((el) => !(el.id == selectParam))" :key="param.id" @click="filterProduct(param.id)">{{ param.name }}</p>
      </div>
    </div>
    <div class="cardsOfProduct__items">
      <div class="cardsOfProduct__items__item" v-for="product in products" :key="product.id">
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
      selectParam: 1,
      openMenu: false,
      products: this.$store.state.products
    }
  },
  watch: {
    '$store.state.products'() {
      this.products = this.$store.state.products
      this.filterProduct(this.selectParam)
    }
  },
  methods: {
    filterProduct(filterId) {
      if (filterId == 1) {
        this.products = this.$store.state.products
      } else if (filterId == 2) {
        this.ascendingPrice()
      } else if (filterId == 3) {
        this.descendingPrice()
      } else if (filterId == 4) {
        this.sortByName()
      }
      this.selectParam = filterId
      this.openMenu = false
    },
    ascendingPrice () { // функция, выполняющая сортировку товаров по возрастанию цены
      const items = Object.assign([], this.products)
      items.sort(function (a, b) {
        if (parseInt(a.price.replaceAll(" ", "")) > parseInt(b.price.replaceAll(" ", ""))) {
          return 1
        }
        if (parseInt(a.price.replaceAll(" ", "")) < parseInt(b.price.replaceAll(" ", ""))) {
          return -1
        }
        return -1
      })

      this.products = items
    },
    descendingPrice () { // функция, выполняющая сортировку товаров по убыванию цены
      const items = Object.assign([], this.products)
      items.sort(function (a, b) {
        if (parseInt(a.price.replaceAll(" ", "")) < parseInt(b.price.replaceAll(" ", ""))) {
          return 1
        }
        if (parseInt(a.price.replaceAll(" ", "")) > parseInt(b.price.replaceAll(" ", ""))) {
          return -1
        }
        return 1
      })

      this.products = items
    },
    sortByName () {
      const items = Object.assign([], this.products)
      items.sort(function (a, b) {
        let nameA = a.name.toLowerCase()
        let nameB = b.name.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
      this.products = items
    }
  }
}
</script>
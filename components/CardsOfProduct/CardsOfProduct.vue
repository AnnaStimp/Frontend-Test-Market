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
      <div class="cardsOfProduct__items__item" v-for="i in 20" :key="i">
        <img src="@/assets/img.png" alt="">
        <div class="cardsOfProduct__items__item__text">
          <p class="cardsOfProduct__items__item__text__name">Наименование товара</p>
          <p class="cardsOfProduct__items__item__text__about">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</p>
          <p class="cardsOfProduct__items__item__text__price">10 000 руб.</p>
        </div>
        <div class="cardsOfProduct__items__item__delete">
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
  }
}
</script>
<template>
 <div class="addProduct">
  <div class="addProduct__header">
    <p>Добавление товара</p>
  </div>
  <div class="addProduct__form" :class="{fixed: fixFormAddProduct}">
    <div class="addProduct__form__field" id="nameProduct">
      <div class="addProduct__form__field__name">
        <p>Наименование товара</p>
        <div class="addProduct__form__field__name__necessarily"></div>
      </div>
      <input type="text" class="addProduct__form__field__input" placeholder="Введите наименование товара" v-model="name">
      <span class="addProduct__form__field__error">Поле является обязательным</span>
    </div>
    <div class="addProduct__form__field">
      <div class="addProduct__form__field__name">
        <p>Описание товара</p>
      </div>
      <textarea class="addProduct__form__field__input textarea" placeholder="Введите описание товара" v-model="about"></textarea>
    </div>
    <div class="addProduct__form__field" id="srcImgProduct">
      <div class="addProduct__form__field__name">
        <p>Ссылка на изображение товара</p>
        <div class="addProduct__form__field__name__necessarily"></div>
      </div>
      <input type="url" class="addProduct__form__field__input" placeholder="Введите ссылку" v-model="srcImg">
      <span class="addProduct__form__field__error">Поле является обязательным</span>
    </div>
    <div class="addProduct__form__field" id="priceProduct">
      <div class="addProduct__form__field__name">
        <p>Цена товара</p>
        <div class="addProduct__form__field__name__necessarily"></div>
      </div>
      <input type="text" class="addProduct__form__field__input" placeholder="Введите цену" v-model="price" @input="checkPrice()">
      <span class="addProduct__form__field__error">Поле является обязательным</span>
    </div>
    <button class="addProduct__form__button" :class="{active: this.active}" @click="submit()">Добавить товар</button>
  </div>
 </div>
</template>

<script>
import './addProduct.scss'

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      about: '',
      srcImg: '',
      price: '',
      active: false
    }
  },
  props: ['fixFormAddProduct'],
  watch: {
    'name'() {
      this.active = this.checkFields()
      if (this.name.length == 0) {
        document.querySelector('#nameProduct').classList.add('error')
      } else {
        document.querySelector('#nameProduct').classList.remove('error')
      }
    },
    'about'() {
      this.active = this.checkFields()
    },
    'srcImg'() {
      this.active = this.checkFields()
      if (this.srcImg.length == 0) {
        document.querySelector('#srcImgProduct').classList.add('error')
      } else {
        document.querySelector('#srcImgProduct').classList.remove('error')
      }
    },
    'price'() {
      this.active = this.checkFields()
      if (parseInt(this.price.replaceAll(" ", "")) <= 0 || !/^[0-9]+$/.test(this.price.replaceAll(" ", ""))) {
        document.querySelector('#priceProduct').classList.add('error')
      } else {
        document.querySelector('#priceProduct').classList.remove('error')
      }
    }
  },
  methods: {
    submit() {
      if (this.active) {
        let product = {
          id: this.$store.state?.products[this.$store.state.products.length -1]?.id + 1 || 1,
          name: this.name,
          about: this.about,
          img: this.srcImg,
          price: this.price
        }
        this.$store.commit('addProduct', product)
      }
    },
    checkFields () {
      if (this.name.length && this.about.length && this.srcImg && parseInt(this.price.replaceAll(" ", "")) > 0 && /^[0-9]+$/.test(this.price.replaceAll(" ", ""))) {
        return true
      }
      return false
    },
    checkPrice() {
      this.price = String(parseInt(this.price.replaceAll(" ", ""))).replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  }
}
</script>

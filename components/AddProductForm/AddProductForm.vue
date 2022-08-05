<template>
 <div class="addProduct">
  <div class="addProduct__header">
    <p>Добавление товара</p>
  </div>
  <div class="addProduct__form" :class="{fixed: fixFormAddProduct}">
    <div class="addProduct__form__field" ref="nameProduct">
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
    <div class="addProduct__form__field" ref="srcImgProduct">
      <div class="addProduct__form__field__name">
        <p>Ссылка на изображение товара</p>
        <div class="addProduct__form__field__name__necessarily"></div>
      </div>
      <input type="url" class="addProduct__form__field__input" placeholder="Введите ссылку" v-model="srcImg">
      <span class="addProduct__form__field__error">Поле является обязательным</span>
    </div>
    <div class="addProduct__form__field" ref="priceProduct">
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
import './addProductForm.scss'

export default {
  name: 'AddProductForm',
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
        this.$refs.nameProduct.classList.add('error')
      } else {
        this.$refs.nameProduct.classList.remove('error')
      }
    },
    'srcImg'() {
      this.active = this.checkFields()
      if (this.srcImg.length == 0) {
        this.$refs.srcImgProduct.classList.add('error')
      } else {
        this.$refs.srcImgProduct.classList.remove('error')
      }
    },
    'price'() {
      this.active = this.checkFields()
      if (parseInt(this.price.replaceAll(' ', '')) <= 0 || !/^[0-9]+$/.test(this.price.replaceAll(' ', ''))) {
        this.$refs.priceProduct.classList.add('error')
      } else {
        this.$refs.priceProduct.classList.remove('error')
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

        this.name = ''
        this.about = ''
        this.srcImg = ''
        this.price = ''
        setTimeout(() => {
          this.$refs.nameProduct.classList.remove('error')
          this.$refs.srcImgProduct.classList.remove('error')
          this.$refs.priceProduct.classList.remove('error')
        })
      }
    },
    checkFields () {
      if (this.name.length && this.srcImg && parseInt(this.price.replaceAll(' ', '')) > 0 && /^[0-9]+$/.test(this.price.replaceAll(' ', ''))) {
        return true
      }
      return false
    },
    checkPrice() {
      this.price = String(parseInt(this.price.replaceAll(' ', ''))).replace(/[^0-9.]/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
  }
}
</script>

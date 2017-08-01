<template>
  <div id="app">
    <button @click="showCart = !showCart">
      Cart
    </button>
    <transition name="slide-fade" class="shoppingCart">
      <shoppingCart v-if="showCart"></shoppingCart>
    </transition>
    <div  class="row">
      <div class="col-md-6">
        <div class="card-block">
          <product v-for="product in products" :product="product" v-bind:key="product.id"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'

const localStorageString = 'cartItems'

export default {
  name: 'app',
  // localStorage
   localStorage: {
    netshoes: {
      type: Object,
      default: []
    }
  },

  watch: {
    items () {
      this.addToLocalStorage(this.cartItems)
    }
  },

  created () {
    this.$http.get(this.API).then((response) => this.products = response.body)
  },
  data () {
    return {
      API: '/api/products',
      products: [],
      cartItems: [],
      showCart: true
    }
  },
  methods: {
    addToLocalStorage(items) {
      this.$localStorage.set(localStorageString, items)
    },
    addItemToCart(item) {
      this.cartItems.push(item)
    },
    removeItemFromCart(item) {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);
    }
  },
  components: {
    Product,
    ShoppingCart
  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.shoppingCart {
  background: black;
  color: white;
  position: fixed;
  top: 0px;
  right: 0;
  width: 600px;
  height: 100%;
}
</style>

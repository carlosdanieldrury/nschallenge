<template>
  <div id="app">
    <v-flex xs12 class="shoppingBasketIcon">
        <button  @click="showCart = !showCart"><v-icon large v-badge="{ value: value, bottom: true, visible: (value > 0)}" class="mt-5 white--text yellow--after">shopping_basket</v-icon></button>
    </v-flex>
    <transition name="slide-fade" class="shoppingCart">
      <shoppingCart v-if="showCart" v-bind:closeShoppingCart='closeShoppingCart' v-bind:shoppingCartItems='cartItems'></shoppingCart>
    </transition>
    <div class="row">
        <product class="col-sm-3" v-for="product in products" :product="product" v-bind:key="product.id"></product>
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
    cartItems () {
      this.addToLocalStorage()
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
      showCart: false
    }
  },
  methods: {
    addToLocalStorage() {
      this.$localStorage.set(localStorageString, this.cartItems)
    },
    addItemToCart(item) {
      this.cartItems.push(item)
    },
    removeItemFromCart(item) {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);
    },
    closeShoppingCart() {
      this.showCart = false;
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
  margin-top: 0px;
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

.product {
  margin: 30px;
}

.shoppingBasketIcon {
  position: fixed;
  background: black;
  width: 10rem;
  height: 10rem;
  z-index: 1 !important;
  top: 0px;
  right: 0px;
  margin-top: 0px;
}

.shoppingCart {
  background: black;
  color: white;
  position: fixed;
  z-index: 1 !important;
  top: 0px;
  right: 0;
  width: 600px;
  height: 100%;
}
</style>

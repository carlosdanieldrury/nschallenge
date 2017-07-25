<template>
  <div id="app">
    <div  class="row" v-for="chunk in chunkedProperties" :key="chunk.id">
      <div class="col-md-6" v-for="property in chunk" :key="property.id">
        <div class="card-block">
          <product v-for="product in products" :product="product" v-bind:key="product.id"></product>
        </div>
      </div>
    </div>
    <shoppingCart></shoppingCart>
  </div>
</template>

<script>
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import chunk from 'lodash/chunk';

export default {
  name: 'app',
  created () {
    this.$http.get(this.API).then((response) => this.products = response.body)
  },
  data () {
    return {
      API: '/api/products',
      products: []
    }
  },
  methods: {
  },
  components: {
    Product,
    ShoppingCart
  },
  computed: {
    chunkedProperties: function () {
      return chunk(this.properties, 2)
  }
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
</style>

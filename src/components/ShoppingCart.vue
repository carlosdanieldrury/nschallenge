<template>
  <div class="shoppingCart">
    <v-btn v-on:click='closeShoppingCartChild()' class="dark white--text">Fechar
      <v-icon left>keyboard_arrow_right</v-icon>
    </v-btn>
    <v-flex xs12 class="mt-3">
        <v-icon large v-badge="{ value: shoppingCartItems.length, bottom: true, overlap: true, visible: (shoppingCartItems.length > 0)}" class="white--text yellow--after v-badge">shopping_basket</v-icon>
    </v-flex>
    <div  v-if="shoppingCartItems.length==0">
      <span>Sacola Vazia</span>
    </div>
    </br>
    <div class="row">
        <shoppingCartItem v-for="product in shoppingCartItems" :product="product" v-bind:key="product.id" :removeItemFromCartRoot='removeItemFromCartSC'></shoppingCartItem>
    </div>
    <div  v-if="shoppingCartItems.length > 0">
      <p class="subtotalText">SUBTOTAL</p>
      <p class="priceTotal">R$ {{ total }}</p>
      <button class="buy">COMPRAR</button>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'

export default {
  props: ['closeShoppingCart', 'shoppingCartItems', 'removeItemFromCartParent'],
  created () {

  },
  data () {
      return {

      }
  },

  watch: {
  },

  methods: {
    closeShoppingCartChild() {
      this.closeShoppingCart()
    },
    removeItemFromCartSC(item) {
      this.removeItemFromCartParent(item)
    }
  },
  computed: {
    total() {
      return this.shoppingCartItems.reduce((sum, i) => sum + i.price, 0).toFixed(2)
    }
  },
  components: {
    ShoppingCartItem
  }
}
</script>

<style>

.pic {
  width: 60px;
  height: 60px;
}

.title {
  font-size: 6em;
  font-style: oblique;
}



.v-badge {
  color: black;
  font-size: 3em;
}

.subtotalText {
  text-align: left;
  font-size: 1em;
  margin-left: 30px;
  color: dimgray;
}

.priceTotal {
  text-align: right;
  font-size: 2em;
  color: goldenrod;
}

.optionPayment {

}

.buy {
  background-color: black;
  width: 90%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

.buy:hover {
  background-color: gray;
  width: 90%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
</style>
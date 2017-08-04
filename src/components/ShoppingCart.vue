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
        <shoppingCartItem v-for="product in shoppingCartItems" :product="product" v-bind:key="product.id"></shoppingCartItem>
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from './ShoppingCartItem'

export default {
  props: ['closeShoppingCart', 'shoppingCartItems'],
  created () {

  },
  data () {
      return {

      }
  },

  watch: {
    shoppingCartItems() {
      console.log('mudou  ', this.shoppingCartSize)
    }
  },

  methods: {
    closeShoppingCartChild() {
      console.log('close shooping cart')
      this.closeShoppingCart()
    }
  },
  computed: {
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

.description {

}

.sizeProduct {

}

.colorProduct {

}

.v-badge {
  color: black;
  font-size: 3em;
}
</style>
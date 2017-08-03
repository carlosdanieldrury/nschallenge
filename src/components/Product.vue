<template>
  <div class="product">
    <img src="../assets/images/produto1.png">
    <p class="title">{{product.title}}</p>
    <v-icon large class="mt-2 yellow--text">remove</v-icon>
    <p class="price">{{product.price}}</p>
    <button @click="addItemToShoppingCart(product)">Comprar</button>
  </div>
</template>

<<script>
export default {
  props: ['product', 'addItemToCartParent'],
  data () {
      return {
          
      }
  },
  methods: {
    addItemToShoppingCart(item) {
      this.addItemToCartParent(item)
    }
  }
}
</script>

<style>

</style>

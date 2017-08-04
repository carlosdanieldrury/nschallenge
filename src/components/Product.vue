<template>
  <div class="product">
    <img src="../assets/images/produto1.png">
    <p class="titleProduct">{{product.title}}</p>
    <v-icon large class="mt-2 yellow--text">remove</v-icon>

      <p>R$ <span class="productPrice">{{product.price.toFixed(2)}}</span></p> 

    <button class="buyProduct" @click="addItemToShoppingCart(product)">Comprar</button>
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
.productPrice {
  font-weight: bold;
  font-size: 1.5em;
}

.buyProduct {
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

.buyProduct:hover {
  background-color: goldenrod;
  width: 90%;
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
</style>

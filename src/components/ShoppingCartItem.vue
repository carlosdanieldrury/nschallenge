<template>
  <div class="shoppingCartItem">
    <img src="../assets/images/produto1.png">
    <p class="title">{{product.title}}</p>
    <v-icon large class="mt-2 yellow--text">remove</v-icon>
    <p class="price">{{product.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'shoppingCartItem',
  props: ['product'],
  data () {
      return {
          
      }
  },
  methods: {

  }
}
</script>

<style>

 .shoppingCartItem { }

  .img {
    width: 6rem;
    height: 6rem;
    float: left;
  }

  .title {
    font-size: 5em;
  }

</style>

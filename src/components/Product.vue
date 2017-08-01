<template>
  <div class="product">
    <h1>Product</h1>
    <img src="../assets/images/produto1.png">
    <p class="title">{{product.title}}</p>
    <p class="price">{{product.price}}</p>
  </div>
</template>

<<script>
export default {
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

</style>

<template>
  <div class="shoppingCartItem row">
    <div class="thumbnail">
      <img class='' src="../assets/images/produto1.png">
    </div>
    <p class="title">{{product.title}}</p>
    <p class="price">{{product.price}}</p>
    <button  @click='removeItemFromCart(product)'><v-icon large class="mt-5 white--text yellow--after">remove</v-icon></button>
  </div>
</template>

<script>
export default {
  name: 'shoppingCartItem',
  props: ['product', 'removeItemFromCartRoot'],
  data () {
      return {
          
      }
  },
  methods: {
    removeItemFromCart(item) {
      this.removeItemFromCartRoot(item)
    }
  }
}
</script>

<style>

 .shoppingCartItem { 
    width: 90%;
    margin: 40px;

 }

  .img {
    width: 6rem;
    height: 6rem;
    float: left;
  }

  .thumbnail {
    float: left;
    width: 60px;
    /*width : 100%; */
    max-height: 60px;
    margin: 10px;
    border: 3px solid #73AD21; 
}

.thumbnail img{
    width: 100%;
    height: auto;
    display: block;
}

  .title {
    font-size: 5em;
  }

</style>

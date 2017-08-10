<template>
  <div class="shoppingCartItem">
    <hr class="line-separator"></hr>
    <div class="thumbnail">
      <img class='' :src="imagePath">
    </div>
    <div class="col-xs-8 mt-2">
      <p class="title">{{product.title}}</p>
    </div>
    <div>
      <p class="description">{{product.availableSizes.join("")}} | {{product.style}}</p>
    </div>
    <div class="col-xs-2 mt-2">
      <button class="removeItem"  @click='removeItemFromCart(product)'><v-icon large class="mt-5 white--text yellow--after">delete_forever</v-icon></button>
      <div class="priceCartItem"> <p>{{product.price.toFixed(2)}}</p></div>
    </div>
    
    
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
  },
  computed: {
    imagePath: function () {
      return '/static/images/produto' + this.product.id % 9 + '.png'
    }
  }
}
</script>

<style scoped>

 .shoppingCartItem { 
    width: 100%;
    margin: 20px;
    margin-bottom: 0px;
    margin-right: 0px;
 }

 .shoppingCartItem:hover {
   background:#717171
 }

  .img {
    width: 6rem;
    height: 6rem;
    float: left;
  }

  .thumbnail {
    float: left;
    width: 80px;
    /*width : 100%; */
    height: 80px;
    margin: 5px;
    border: 3px solid #73AD21; 
}

.thumbnail img{
    width: 60px;
    height: auto;
    display: block;
}

  .title {
    margin-top: 15px;
    font-size: 4em;
    font-weight: 500;
    font-style: normal;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

  }

  .line-separator{
    height:1px;
    background: black;
    border-bottom:1px solid black;
  }

  .description {
    font-size: 1em;
    color:gray;
}


.colorProduct {

}

.qtd {

}

.removeItem {
  margin-right: 50px;
  float: right;
}

.priceCartItem {
  text-align: right;
  font-size: 1.5em;
  margin-right: 50px;
  color: goldenrod;

}



</style>

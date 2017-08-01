<template>
  <div class="shoppingCart">
    <h3>Shopping Card</h3>
    <div class="text-xs-center">
    <v-icon large v-badge="{ value: value, left: true}" class="grey--text text--lighten-1">shopping_cart</v-icon>

    <v-icon large v-badge="{ value: '!' }" class="grey--text red--after">mail</v-icon>
  </div>
    <img :src="'../assets/images/produto1.png'">
  </div>
</template>

<<script>
export default {
  data () {
      return {
        value: 8
      }
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

</style>
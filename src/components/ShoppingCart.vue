<template>
  <div class="shoppingCart">
    <h3>Shopping Card</h3>
    <v-flex xs12 class="mt-5">
        <v-icon large v-badge="{ value: value, bottom: true, visible: (value > 0)}" class="white--text yellow--after">shopping_basket</v-icon>
    </v-flex>
    <img large v-badge="{ value: value, bottom:true }" class="v-badge grey--text text--lighten-4 yellow--after" src="'../assets/images/sacola.png'">
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

.v-badge {
  color: black;
}
</style>
import Vue from 'vue'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
import ShoppingCartItem from '@/components/ShoppingCartItem'
import products from '@/api/products'
import App from '@/App'

describe('ShoppingCart.vue', () => {
  const Constructor = Vue.extend(ShoppingCart)
  const props = products.products;
  it('should render correct contents of Products on ShoppingCart component', () => {
    const vm = new Constructor(
      { propsData: {
          products: props
        }
      }
    ).$mount()
    expect(vm.$el.products)
      .to.equal(products.products)
  })

})



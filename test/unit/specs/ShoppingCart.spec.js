import Vue from 'vue'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
import ShoppingCartItem from '@/components/ShoppingCartItem'
import products from './products'
import App from '@/App'

describe('ShoppingCart.vue', () => {


  const Constructor = Vue.extend(ShoppingCart)
  const props = products.products;
  it('should render correct contents of Products on ShoppingCart component', done => {
    const vm = new Constructor(
      { propsData: {
          shoppingCartItems: props
        }
      }
    ).$mount()

    Vue.nextTick(() => {
      expect(vm.shoppingCartItems).to.equal(products.products)
      done()
    })

  })

})

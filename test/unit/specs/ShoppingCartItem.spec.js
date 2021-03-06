import Vue from 'vue'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
import ShoppingCartItem from '@/components/ShoppingCartItem'
import products from './products'

describe('ShoppingCartItem.vue', () => {
  const Constructor = Vue.extend(ShoppingCartItem)
  const props = products.products[0];
  it('should render correct contents of Products on ShoppingCart component', () => {
    const vm = new Constructor(
      { propsData: {
          product: props
        }
      }
    ).$mount()
    Vue.nextTick(() => {
      expect(vm.product)
      .to.equal(products.products[0])
    })
    
  })

})



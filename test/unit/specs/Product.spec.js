import Vue from 'vue'
import Product from '@/components/Product'
import products from './products'

describe('Product.vue', () => {
  const Constructor = Vue.extend(Product)
  const props = products.products[0];
  it('should render correct contents of Products on Product component', () => {
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



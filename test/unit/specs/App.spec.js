import Vue from 'vue'
import ShoppingCart from '@/components/ShoppingCart'
import Product from '@/components/Product'
import ShoppingCartItem from '@/components/ShoppingCartItem'
import products from '@/api/products'
import App from './../../../src/App'

describe('App.vue', () => {
    
    it('should has a list or products', done => {
        const Constructor = Vue.extend(App)
        const vm = new Constructor().$mount()
        console.log(vm.data)
        expect(vm.data.products)
            .to.equal(products.products)
        done()
    })

})



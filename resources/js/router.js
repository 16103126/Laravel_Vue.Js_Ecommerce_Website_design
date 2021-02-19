import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Methods from './components/pages/basic/methods.vue'
import Product from './components/pages/product.vue'
import Ecommerce from './components/pages/eCommerce.vue'
import Carousel from './components/pages/carousel.vue'

const routes = new VueRouter ({
    mode: 'history',
    routes:[
        
        //methods
         {
            path:'/methods',
            component: Methods,
           
        },
        {
            path:'/carousel',
            component: Carousel,
           
        },
        {
            path:'/product',
            component: Product,
            name: 'product'
           
        },
        {
            path:'/ecommerce',
            component: Ecommerce,
            name: 'ecommerce'
           
        }
    ]
});

export default routes;
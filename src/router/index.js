import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Descover from '@/components/Descover/Descover.vue';
  import Details from '@/components/Descover/Details.vue';
import Order from '@/components/Order/Order.vue';
import Mine from '@/components/Mine/Mine.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/descover',
      name: 'Descover',
      component: Descover
    },{
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/mine',
      name: 'Mine',
      component: Mine
    },{
      path:'/details/:aid',
      name:'Details',
      component:Details
    }
  ]
})

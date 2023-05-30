import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '@/views/HelloWorld.vue'
import NewView from '@/views/NewView.vue'

const routes = [
    {
       path: '/',
       name: 'home',
       component: HelloWorld 
    },
    {
       path: '/newview',
       name: 'new',
       component: NewView 
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
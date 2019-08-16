import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index.vue'
import About from '../pages/about.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
export default router
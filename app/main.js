import Vue from 'vue'
import router from './router/index'
import iView from 'iview'
import App from './app.vue'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

new Vue({
    el: '#app',
    router,
    render: (h) => h(App)
})
/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-04-08 09:33:08
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-04-19 15:51:45
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局CSS
import '@/assets/css/public.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})


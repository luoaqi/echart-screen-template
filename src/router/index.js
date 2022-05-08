/*
 * @Descripttion:
 * @version:
 * @Author: Liu ZiJie
 * @Date: 2022-03-31 11:56:23
 * @LastEditors: Liu ZiJie
 * @LastEditTime: 2022-03-31 13:01:49
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index')
    }

]

const router = new VueRouter({
    routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//webpack按需加载组件
const home = () => import('@/page/home/home')
const collection = () => import('@/page/collection/collection')
const sign = () => import('@/page/sign/sign')

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'home',
			component: home,
		},
		{
			path: '/collection',
			name: 'collection',
			component: collection,
		},
		{
			path: '/sign',
			name: 'sign',
			component: sign,
		},
	],
})

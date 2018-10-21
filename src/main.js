import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'assets/styles/base.css'

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App },
})

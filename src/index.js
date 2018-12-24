import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.prototype.$req = (api, data = {}) => axios.get(`/db${api}`, {
    params: data
}) // 利用axios封装一个全局的http请求方法

new Vue({
    render: h => h(App)
}).$mount('#app')
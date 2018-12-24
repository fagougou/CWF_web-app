import Vue from 'vue'
import axios from 'axios'
import App from './App'

Vue.prototype.$req = (api, data = {}) => axios.get(`/db/${api}`, {
    params: data
})

new Vue({
    render: h => h(App)
}).$mount('#app')
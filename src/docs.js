import Vue from 'vue'
import App from './app.vue'
import Materials from './index'

Vue.use(Materials)

new Vue({
    el: '#app',
    render: h => h(App)
})

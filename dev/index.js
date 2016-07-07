import Vue from 'vue'
import Materials from '../src/index.js'
import App from './app.vue'

Vue.use(Materials)

new Vue({
    el: '#app',
    render: h => h(App)
})
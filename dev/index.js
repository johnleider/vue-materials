import Vue from 'vue'
import Materials from '../dist/vue-materials.common.js'
import App from './app.vue'

Vue.use(Materials)

new Vue({
    el: '#app',
    render: h => h(App)
})
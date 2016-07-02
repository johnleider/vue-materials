require("./docs.scss")

import Vue from 'vue'
import Resource from 'vue-resource'
import Materials from './index'
import App from './app.vue'

Vue.use(Resource)
Vue.use(Materials)

new Vue({
    el: '#app',
    render: h => h(App)
})

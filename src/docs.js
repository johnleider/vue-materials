require("./docs.scss")

import Vue from 'vue'
import Resource from 'vue-resource'
import Materials from './index'
import App from './app.vue'
import Bootstrap from './bootstrap'

Vue.use(Resource)
Vue.use(Materials)

for (var key in Bootstrap) {
    Vue.component(key, Bootstrap[key])
}

new Vue({
    el: '#app',
    render: h => h(App)
})

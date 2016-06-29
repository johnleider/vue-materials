import Vue from 'vue'
import Materials from './index'
import App from './app.vue'
import Bootstrap from './bootstrap'

Vue.use(Materials)

for (var key in Bootstrap) {
    Vue.component(key, Bootstrap[key])
}

new Vue({
    el: '#app',
    render: h => h(App)
})

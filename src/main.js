import Vue from 'vue'
import App from './app.vue'
import Materials from './vue-materialize'

for (let key in Materials) {
    Vue.component(key, Materials[key])
}

new Vue({
    el: '#app',
    render: h => h(App)
})

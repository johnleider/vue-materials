import Components from './components/_index'
import Directives from './directives/_index'
import Dialog from './util/dialog'
import ScrollFire from './util/scroll-fire'

function plugin(Vue) {
    if (plugin.installed) return

    for (let key in Components) {
        Vue.component(key, Components[key])
    }

    for (let key in Directives) {
        Vue.directive(key, Directives[key])
    }

    Vue.dialog = Dialog
    Vue.scrollFire = ScrollFire

    Object.defineProperties(Vue.prototype, {
        $dialog: {
            get: () => Vue.dialog.bind(this)
        },

        $scrollFire: {
            get: () => Vue.scrollFire.bind(this)
        }
    })
}

export default plugin

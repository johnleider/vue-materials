import Components from './components/index'
import Directives from './directives/index'
import Dialog from './util/dialog'
import ScrollFire from './util/scroll-fire'

function plugin(Vue) {
    if (plugin.installed) {
        return
    }

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
            get () {
                return Vue.dialog.bind(this)
            }
        },

        $scrollFire: {
            get () {
                return Vue.scrollFire.bind(this)
            }
        }
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin

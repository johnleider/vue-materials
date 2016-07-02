import Components from './components'
import Dialog from './util/dialog'
import ScrollFire from './util/scroll-fire'
import Tooltip from './directives/tooltip'
import Dropdown from './directives/dropdown'
import Modal from './directives/modal'
import SideNav from './directives/side-nav'

function plugin(Vue) {
    if (plugin.installed) {
        return
    }

    for (let key in Components) {
        Vue.component(key, Components[key])
    }

    Vue.directive('tooltip', Tooltip)
    Vue.directive('dropdown', Dropdown)
    Vue.directive('modal', Modal)
    Vue.directive('side-nav', SideNav)

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

export default plugin

import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        const params = binding.value || {}
        
        el.setAttribute('data-activates', binding.arg)

        Load.call(vnode.context, () => $(el).sideNav(params))
    }
}

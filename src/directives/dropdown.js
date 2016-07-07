import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        const params = binding.expression || {}

        el.setAttribute('data-activates', binding.arg)

        Load.call(vnode.context, () => $(el).dropdown(params))
    }
}

import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            el.setAttribute('data-activates', binding.expression || {})
            $(el).dropdown(params)
        })
    }
}

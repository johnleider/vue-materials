import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            const params = binding.value || {}

            el.setAttribute('data-activates', binding.arg || params.value)
            $(el).dropdown(params)
        })
    }
}

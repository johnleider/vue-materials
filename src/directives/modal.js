import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        const params = binding.expression || {}

        if (el.nodeName === 'button') {
            el.setAttribute('data-target', binding.arg)
        } else {
            el.setAttribute('href', `#${binding.arg}`)
        }

        Load.call(vnode.context, () => $(el).leanModal(params))
    }
}

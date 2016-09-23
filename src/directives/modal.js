import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            if (el.nodeName === 'button') {
                el.setAttribute('data-target', binding.arg)
            } else {
                el.setAttribute('href', `#${binding.arg}`)
            }
            
            $(el).leanModal(binding.value || {})
        })
    }
}

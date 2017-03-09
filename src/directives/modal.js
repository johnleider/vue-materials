import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            const params = binding.value || {}
            if (el.nodeName === 'button') {
                el.setAttribute('data-target', binding.arg || params.value)
            } else {
                el.setAttribute('href', `#${binding.arg || params.value}`)
            }
            
            $(`#${binding.arg || params.value}`).modal()
        })
    }
}

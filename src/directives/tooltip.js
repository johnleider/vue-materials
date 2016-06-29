const load = (el, binding) => {
    const position = typeof binding.arg !== 'undefined'
            ? binding.arg
            : 'bottom'
            
    const delay = typeof binding.modifiers !== 'undefined'
        ? Object.keys(binding.modifiers)[0]
        : 50

    const tooltip = binding.expression

    el.classList.add('tooltipped')
    el.setAttribute('data-position', position)
    el.setAttribute('data-delay', delay)
    el.setAttribute('data-tooltip', tooltip)
}

export default {
    bind (el, binding, vnode) {
        load(el, binding)
    },

    postupdate (el, binding) {
        load(el, binding)
    }
}

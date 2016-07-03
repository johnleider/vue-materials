import Load from '../util/load'

const tooltip = (el, binding, vnode) => {
    const delay = typeof binding.modifiers !== 'undefined'
        ? Object.keys(binding.modifiers)[0]
        : 50

    el.classList.add('tooltipped')
    el.setAttribute('data-position', binding.arg)
    el.setAttribute('data-delay', delay)
    el.setAttribute('data-tooltip', binding.expression)

    Load.call(vnode.context, () => $(el).tooltip())
} 

export default {
    bind (el, binding, vnode) {
        tooltip(el, binding, vnode)
    },

    postupdate (el, binding, vnode) {
        tooltip(el, binding, vnode)
    },

    unbind (el) {
        el.removeEventListener('mouseenter')
        el.removeEventListener('mouseleave')
    }
}

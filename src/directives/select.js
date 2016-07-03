import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            $(el).material_select()

            el.onchange = () => {
                console.log(vnode)
            }
        })
    },

    update (el, binding, vnode) {
        console.log(binding)

    }
}
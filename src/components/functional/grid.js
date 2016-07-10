export default {
    functional: true,

    render: (h, { data, children }) => {
        let attrs = Object.keys(data.staticAttrs)
        attrs.unshift('col')
        data.staticAttrs = {}
        data.staticAttrs.class = attrs.join(' ')

        return h('div', data, children)
    }
}

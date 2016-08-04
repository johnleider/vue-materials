export default {
    functional: true,

    render: (h, { data, children }) => {
        let attrs = Object.keys(data.attrs)
        attrs.unshift('col')
        data.attrs = {}
        data.attrs.class = attrs.join(' ')

        return h('div', data, children)
    }
}

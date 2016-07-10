export default {
    functional: true,

    render: (h, { data, children }) => {
        data.staticClass = 'row'

        return h('div', data, children)
    }
}

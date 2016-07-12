export default {
    functional: true,

    render: (h, { data, children }) => {
        if (!data.staticClass) {
            data.staticClass = ''
        }

        data.staticClass += ' collapsible-header'

        return h('div', data, children)
    }
}

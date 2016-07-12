export default {
    functional: true,

    render: (h, { data, children }) => {
        if (!data.staticClass) {
            data.staticClass = ''
        }

        data.staticClass += ' collapsible-body'

        return h('div', data, children)
    }
}

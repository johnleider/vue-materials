export default {
    functional: true,

    render: (h, { data, children }) => {
        if (!data.staticClass) {
            data.staticClass = ''
        }

        data.staticClass += ' dropdown-content'

        return h('ul', data, children)
    }
}

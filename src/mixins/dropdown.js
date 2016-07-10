export default {
    props: {
        induration: {
            type: Number,
            default: 300
        },

        outduration: {
            type: Number,
            default: 225
        },

        constrainwidth: {
            type: Boolean,
            default: true
        },

        hover: {
            type: Boolean,
            default: false
        },

        gutter: {
            type: Number,
            default: 0
        },

        beloworigin: {
            type: Boolean,
            default: false
        },

        alignment: {
            type: String,
            default: 'left'
        }
    }
}
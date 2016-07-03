export default {
    props: {
        default: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        defaultsMixin () {
            return {
                'browser-default': this.default
            }
        }
    }
}

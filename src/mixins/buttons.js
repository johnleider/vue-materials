export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },

        flat: {
            type: Boolean,
            default: false
        },

        floating: {
            type: Boolean,
            default: false
        },

        large: {
            type: Boolean,
            default: false
        },

        modal: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        buttonsMixin () {
            return {
                'btn': !this.flat,
                'btn-floating': this.floating,
                'btn-large': this.large,
                'btn-flat': this.flat,
                'modal-action modal-close': this.modal,
                'disabled': this.disabled
            }
        }
    }
}

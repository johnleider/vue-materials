export default {
    props: {
        dropdown: {
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

        waves: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        options () {
            return {
                'btn-floating': this.floating,
                'btn-large': this.large,
                'dropdown-button': this.dropdown,
                'waves-effect': this.waves,
                'waves-light': this.waves
            }
        }
    }
}

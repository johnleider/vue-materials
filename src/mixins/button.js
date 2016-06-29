export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },

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

        modalLink: {
            type: Boolean,
            default: false
        },

        large: {
            type: Boolean,
            default: false
        },

        wavesCircle: {
            type: Boolean,
            default: false
        },

        wavesLight: {
            type: Boolean,
            default: false
        },

        wavesRed: {
            type: Boolean,
            default: false
        },

        wavesYellow: {
            type: Boolean,
            default: false
        },

        wavesOrange: {
            type: Boolean,
            default: false
        },

        wavesPurple: {
            type: Boolean,
            default: false
        },

        wavesGreen: {
            type: Boolean,
            default: false
        },

        wavesTeal: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        options () {
            return {
                'btn': !this.modalLink,
                'btn-floating': this.floating,
                'btn-large': this.large,
                'btn-flat': this.flat,
                'dropdown-button': this.dropdown,
                'disabled': this.disabled,
                'modal-action modal-close btn-flat': this.modalLink,
                'waves-effect waves-light': this.wavesLight,
                'waves-effect waves-red': this.wavesRed,
                'waves-effect waves-yellow': this.wavesYellow,
                'waves-effect waves-orange': this.wavesOrange,
                'waves-effect waves-purple': this.wavesPurple,
                'waves-effect waves-green': this.wavesGreen,
                'waves-effect waves-teal': this.wavesTeal,
                'waves-circle': this.wavesCircle
            }
        }
    }
}

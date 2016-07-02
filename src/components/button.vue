<template>
    <button :class="classes"
            :type="type"
    >
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    import Buttons from '../mixins/buttons'
    import Waves from '../mixins/waves'

    export default {
        mixins: [
            Buttons,
            Waves
        ],

        props: {
            type: {
                type: String,
                default: 'button'
            }
        },

        computed: {
            classes () {
                return Object.assign(
                    this.buttonsMixin,
                    this.wavesMixin
                )
            }
        }
    }
</script>

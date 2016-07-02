<template>
    <a :class="classes"
       :href="href"
    >
        <slot></slot>
    </a>
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
            href: {
                type: String,
                default: '#!'
            }
        },

        computed: {
            classes () {
                return Object.assign(
                    this.buttonsMixin,
                    this.wavesMixing
                )
            }
        }
    }
</script>

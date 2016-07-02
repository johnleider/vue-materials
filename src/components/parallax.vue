<template>
    <div class="parallax-container"
         :style="style"
    >
        <div class="parallax">
            <img :src="src">
        </div>
    </div>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            height: {
                type: Number,
                default: 500
            },

            src: {
                type: String,
                required: true
            }
        },

        computed: {
            style () {
                return {
                    height: `${this.height}px`
                }
            }
        },

        methods: {
            init () {
                $('.parallax').parallax()
            }
        }
    }
</script>

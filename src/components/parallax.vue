<template>
    <div class="parallax-container"
         :style="style"
    >
        <div class="parallax">
            <img :src="src">
        </div>
    </div>
</template>

<script>
    export default {
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

        mounted () {
            this.init()
        },

        methods: {
            init () {
                if (document.readyState === 'complete') {
                    return this.$nextTick(() => this.load())
                }

                document.addEventListener('DOMContentLoaded', () => this.load())
            },

            load () {
                $('.parallax').parallax()
            }
        }
    }
</script>

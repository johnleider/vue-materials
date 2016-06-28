<template>
    <div class="parallax-container">
        <div class="parallax"><img :src="src"></div>
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                type: String,
                default: 500
            },

            src: {
                type: String,
                required: true
            }
        },

        mounted () {
            this.init()
        },

        methods: {
            init () {
                document.addEventListener('DOMContentLoaded', () => $('.parallax').parallax())
                this.$el.style.height = `${this.height}px`
            }
        }
    }
</script>

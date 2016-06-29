<template>
    <div class="carousel"
         :class="options"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            timeConstant: {
                type: Number,
                default: 200
            },

            dist: {
                type: Number,
                default: -100
            },

            shift: {
                type: Number,
                default: 0
            },

            padding: {
                type: Number,
                default: 0
            },

            full_width: {
                type: Boolean,
                default: false
            },

            slider: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            options () {
                return {
                    'carousel-slider': this.slider
                }
            },

            params () {
                return {
                    time_constant: this.timeConstant,
                    dist: this.dist,
                    shift: this.shift,
                    padding: this.padding,
                    full_width: this.fullWidth
                }
            }
        },

        mounted () {
            this.init()
        },

        methods: {
            init () {
                if (document.readyState === 'complete') {
                    return this.load()
                }

                document.addEventListener('DOMContentLoaded', () => this.load())
            },

            load () {
                $(this.$el).carousel(this.params)
            },

            next (n = 1) {
                $(this.$el).carousel('next', [n])
            },

            prev (n = 1) {
                $(this.$el).carousel('prev', [n])
            }
        }
    }
</script>

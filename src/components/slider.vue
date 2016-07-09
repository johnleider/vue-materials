<template>
    <div class="slider"
         :class="classes"
    >
        <ul class="slides">
            <slot></slot>
        </ul>
    </div>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            fullWidth: {
                type: Boolean,
                default: false
            },

            indicators: {
                type: Boolean,
                default: true
            },

            height: {
                type: Number,
                default: 400
            },

            transition: {
                type: Number,
                default: 500
            },

            interval: {
                type: Number,
                default: 6000
            }
        },

        computed: {
            classes () {
                return {
                    'fullscreen': this.fullWidth
                }
            },

            params () {
                return {
                    full_width: this.fullWidth,
                    indicators: this.indicators,
                    height: this.height,
                    transition: this.transition,
                    interval: this.interval
                }
            }
        },

        methods: {
            init () {
                $(this.$el).slider(this.params)
            },

            pause () {
                $(this.$el).slider('pause')
                this.$emit('pause')
            },

            start () {
                $(this.$el).slider('start')
                this.$emit('start')
            },

            next () {
                $(this.$el).slider('next')
                this.$emit('next')
            },

            prev () {
                $(this.$el).slider('prev')
                this.$emit('prev')
            }
        }
    }
</script>

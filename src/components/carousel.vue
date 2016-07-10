<template>
    <div class="carousel"
         :class="classes"
         :style="styles"
    >
        <carousel-item v-for="i in items"
                       :src="i"
        ></carousel-item>
        <slot></slot>
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
                default: 300
            },

            dist: {
                type: Number,
                default: -100
            },
            
            timeConstant: {
                type: Number,
                default: 200
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
            },

            items: {
                type: Array,
                default: () => []
            }
        },

        computed: {
            classes () {
                return {
                    'carousel-slider': this.slider
                }
            },

            styles () {
                return {
                    'height': this.height
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

        methods: {
            init () {
                $(this.$el).carousel(this.params)
            },

            next (n = 1) {
                $(this.$el).carousel('next', [n])
                this.$emit('next')
            },

            prev (n = 1) {
                $(this.$el).carousel('prev', [n])
                this.$emit('prev')
            }
        }
    }
</script>

<template>
    <ul class="collapsible"
        :data-collapsible="type"
        :class="classes"
    >
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            collapse: {
                type: Boolean,
                default: false
            },

            expand: {
                type: Boolean,
                default: false
            },

            popout: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'popout': this.popout
                }
            },

            params () {
                return {
                    accordion: this.type === 'accordion'
                }
            },

            type () {
                if (this.collapse) return 'accordion'
                if (this.expand)  return 'expandable'
            }
        },

        methods: {
            init () {
                $(this.$el).collapsible(this.params)
            }
        }
    }
</script>

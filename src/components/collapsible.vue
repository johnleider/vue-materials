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
            collapsible: {
                type: Boolean,
                default: false
            },

            expandable: {
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
                if (this.collapsible) return 'accordion'
                if (this.expandable)  return 'expandable'
            }
        },

        methods: {
            init () {
                $(this.$el).collapsible(this.params)
            }
        }
    }
</script>

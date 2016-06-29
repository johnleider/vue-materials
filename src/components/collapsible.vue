<template>
    <ul class="collapsible"
        :data-collapsible="type"
        :class="options"
    >
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    export default {
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
            options () {
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
                if (this.expandable) return 'expandable'
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
            },

            load () {
                $(this.$el).collapsible(this.params)
            }
        }
    }
</script>

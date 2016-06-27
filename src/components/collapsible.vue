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

            type () {
                if (this.collapsible) return 'accordion'
                if (this.expandable) return 'expandable'
            }
        }
    }
</script>

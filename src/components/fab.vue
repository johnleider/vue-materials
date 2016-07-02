<template>
    <div class="fixed-action-btn"
         :class="classes"
    >
        <slot name="btn"></slot>
        <slot name="items"></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            horizontal: {
                type: Boolean,
                default: false
            },

            toggle: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'click-to-toggle': this.toggle,
                    'horizontal': this.horizontal
                }
            }
        },

        methods: {
            open () {
                $(this.$el).openFAB()
                this.$emit('openned')
            },

            close () {
                $(this.$el).closeFAB()
                this.$emit('closed')
            }
        }
    }
</script>

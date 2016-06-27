<template>
    <div class="fixed-action-btn"
         :class="options"
    >
        <slot name="btn"></slot>
        <slot name="items"></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        events: {
            close () {
                $(this.$el).closeFAB()
            }
        },

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
            options () {
                return {
                    'click-to-toggle': this.toggle,
                    'horizontal': this.horizontal
                }
            }
        }
    }
</script>


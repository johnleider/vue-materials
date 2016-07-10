<template>
    <div class="fixed-action-btn"
         :class="classes"
    >
        <btn-link large
                  floating
        >
            <icon>{{ icon }}</icon>
        </btn-link>
        <slot name="items"></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            icon: {
                type: String,
                required: true
            },
            
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
                this.$emit('open')
            },

            close () {
                $(this.$el).closeFAB()
                this.$emit('close')
            }
        }
    }
</script>

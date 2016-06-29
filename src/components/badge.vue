<template>
    <span class="badge"
          :class="options"
    >
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: {
            new: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            options () {
                return {
                    'new': this.new
                }
            }
        }
    }
</script>

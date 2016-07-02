<template>
    <span class="badge"
          :class="classes"
    >
        <slot></slot>
    </span>
</template>

<script type="text/babel">
    export default {
        props: {
            new: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'new': this.new
                }
            }
        }
    }
</script>

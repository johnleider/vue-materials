<template>
    <ul class="collection"
        :class="options"
    >
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            withHeader: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            options () {
                return {
                    'with-header': this.withHeader
                }
            }
        }
    }
</script>

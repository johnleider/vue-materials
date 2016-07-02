<template>
    <ul class="collection"
        :class="classes"
    >
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    export default {
        props: {
            withHeader: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'with-header': this.withHeader
                }
            }
        }
    }
</script>

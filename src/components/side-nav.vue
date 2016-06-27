<template>
    <ul :id="id" 
        class="side-nav"
        :class="options"
    >
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            fixed: {
                type: Boolean,
                default: false
            },

            id: {
                type: String,
                required: true
            }
        },

        computed: {
            options () {
                return {
                    'fixed': this.fixed
                }
            }
        }
    }
</script>
<template>
    <ul :id="id" 
        :class="options"
        class="side-nav"
    >
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
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

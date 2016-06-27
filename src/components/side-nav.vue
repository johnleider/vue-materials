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
                default: ''
            }
        },

        ready () {
            // $('.button-collapse').sideNav()
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
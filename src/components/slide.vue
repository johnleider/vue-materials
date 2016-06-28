<template>
    <li>
        <img :src="src">
        <div class="caption"
             :class="options"
        >
            <slot></slot>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            center: {
                type: Boolean,
                default: false
            },

            left: {
                type: Boolean,
                default: false
            },

            right: {
                type: Boolean,
                default: false
            },

            src: {
                type: String,
                required: true
            }
        },

        computed: {
            options () {
                return {
                    'left-align': this.left,
                    'center-align': this.center,
                    'right-align': this.right
                }
            }
        }
    }
</script>

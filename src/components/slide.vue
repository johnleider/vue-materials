<template>
    <li>
        <img :src="src">
        <div class="caption"
             :class="classes"
        >
            <slot></slot>
        </div>
    </li>
</template>

<script type="text/babel">
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
            classes () {
                return {
                    'left-align': this.left,
                    'center-align': this.center,
                    'right-align': this.right
                }
            }
        }
    }
</script>

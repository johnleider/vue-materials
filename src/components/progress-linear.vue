<template>
    <div class="progress">
        <div :class="options" 
             :style="style"
        ></div>
    </div>
</template>

<script>
    export default {
        props: {
            determinate: {
                type: Boolean,
                default: false
            },

            indeterminate: {
                type: Boolean,
                default: false
            },

            width: {
                type: Number,
                default: false
            }
        },

        methods: {
            options () {
                return {
                    'determinate': this.determinate,
                    'indeterminate': this.indeterminate
                }
            },

            style () {
                if (this.width === false) return {}

                return {
                    'width': `${this.width}%`
                }
            }
        }
    }
</script>

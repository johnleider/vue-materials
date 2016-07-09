<template>
    <div class="progress">
        <div :class="classes" 
             :style="style"
        ></div>
    </div>
</template>

<script type="text/babel">
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

            value: {
                type: [String]
            },

            width: {
                type: [String]
            }
        },

        computed: {
            classes () {
                return {
                    'determinate': this.determinate,
                    'indeterminate': this.indeterminate
                }
            },

            style () {
                if (!this.width && !this.value) {
                    return {}
                }

                const value = this.value ? this.value : this.width

                return {
                    'width': value
                }
            }
        }
    }
</script>

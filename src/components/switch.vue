<template>
    <div class="switch">
        <label>
            {{ off }}
            <input type="checkbox"
                   ref="checkbox"
            >
            <span class="lever"></span>
            {{ on }}
        </label>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            off: {
                type: String,
                default: 'Off'
            },

            on: {
                type: String,
                default: 'On'
            },

            value: {
                type: Boolean
            }
        },

        mounted () {
            if (this.value) {
                this.$refs.checkbox.checked = true
            }

            const vm = this
            this.$el.onchange = function () {
                vm.$emit('input', vm.$refs.checkbox.checked)
            }
        }
    }
</script>

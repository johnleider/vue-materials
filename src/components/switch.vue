<template>
    <div class="switch">
        <label>
            {{ off }}
            <input type="checkbox"
                   ref="checkbox"
                   :name="name"
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

            name: String,

            checked: {
                type: Boolean,
                default: false
            },

            value: {
                type: Boolean
            }
        },

        mounted () {
            if (this.value || this.checked) {
                this.$refs.checkbox.checked = true
            }

            const vm = this
            this.$el.onchange = function () {
                vm.$emit('input', vm.$refs.checkbox.checked)
            }
        }
    }
</script>

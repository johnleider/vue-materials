<template>
    <p class="range-field">
        <input type="range"
               :min="min"
               :max="max"
               :value="value"
               ref="range"
        >
    </p>
</template>

<script type="text/babel">
    export default {
        props: {
            max: {
                type: [String, Number],
                default: 100
            },

            min: {
                type: [String, Number],
                default: 0
            },

            value: {
                type: [String, Number]
            }
        },

        mounted () {
            const vm = this
            this.$refs.range.onchange = function () {
                vm.$emit('input', this.value)
            }
        }
    }
</script>

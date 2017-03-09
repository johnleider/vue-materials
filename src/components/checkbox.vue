<template>
    <p>
      <input type="checkbox"
             :id="id || name"
             :name="name"
             :disabled="disabled"
             :class="classes"
             ref="checkbox"
      >
      <label :for="id || name">
          <slot></slot>
      </label>
    </p>
</template>

<script type="text/babel">
    export default {
        props: {
            id: String,

            name: {
                type: String,
                required: true
            },

            checked: {
                type: Boolean,
                default: false
            },

            value: {
                required: false
            },

            disabled: {
                type: Boolean,
                default: false
            },

            indeterminate: {
                type: Boolean,
                default: false
            },

            filledIn: {
                type: Boolean,
                default: false
            },

            valueV: {
                required: false
            }
        },

        computed: {
            classes () {
                return {
                    'filled-in': this.filledIn
                }
            }
        },

        mounted () {
            if (this.indeterminate) {
                this.$refs.checkbox.indeterminate = true
            }

            if ((Array.isArray(this.value) &&
                this.value.includes(this.valueV)) ||
                    (!Array.isArray(this.value) &&
                        this.value)) {
                this.$refs.checkbox.setAttribute('checked', true)
            }

            const vm = this
            this.$refs.checkbox.onchange = function () {
                vm.$emit('input', this.checked)
            }
        }
    }
</script>

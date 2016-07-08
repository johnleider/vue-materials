<template>
    <p>
      <input type="checkbox"
             :id="id"
             :name="name"
             :disabled="disabled"
             :class="classes"
             ref="checkbox"
      >
      <label :for="id">
          <slot></slot>
      </label>
    </p>
</template>

<script type="text/babel">
    export default {
        props: {
            id: {
                type: String,
                required: true
            },

            name: {
                type: String
            },

            value: {
                type: Boolean
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

            if (this.value) {
                this.$refs.checkbox.setAttribute('checked', true)
            }

            const vm = this
            this.$refs.checkbox.onchange = function () {
                vm.$emit('input', this.checked)
            }
        }
    }
</script>
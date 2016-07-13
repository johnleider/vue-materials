<template>
    <p>
      <input type="radio"
             :id="id"
             :name="name"
             :disabled="disabled"
             :class="classes"
             :value="val"
             ref="radio"
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

            checked: {
                type: Boolean,
                default: false
            },

            val: {
                type: [String, Number]
            },

            value: {
                type: [String, Number]
            },

            disabled: {
                type: Boolean,
                default: false
            },

            withGap: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'with-gap': this.withGap
                }
            }
        },

        mounted () {
            if (this.$refs.radio.value === this.value || this.checked) {
                this.$refs.radio.setAttribute('checked', true)
            }

            const vm = this
            this.$refs.radio.onchange = function () {
                vm.$emit('input', this.value)
            }
        }
    }
</script>

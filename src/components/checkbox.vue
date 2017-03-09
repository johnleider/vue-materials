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

        watch: {
            value () {
                if (Array.isArray(this.value)) {
                    const index = this.value.indexOf(this.valueV)

                    if (index !== -1) {
                        this.$refs.checkbox.checked = true
                    } else {
                        this.$refs.checkbox.checked = false
                    }
                } else {
                    this.$refs.checkbox.checked = this.value
                }
                this.check()
            }
        },

        mounted () {
            if (this.indeterminate) {
                this.$refs.checkbox.indeterminate = true
            }

            this.check()

            const vm = this
            this.$refs.checkbox.onchange = function () {
                let value = vm.value
                if (Array.isArray(vm.value)) {
                    const index = vm.value.indexOf(vm.valueV)

                    if (index !== -1) {
                        value.splice(index, 1)
                    } else {
                        value = vm.value
                        value.push(vm.valueV)
                    }
                }

                vm.$emit('input', value)
            }
        },

        methods: {
            check () {
                if ((Array.isArray(this.value) &&
                    this.value.includes(this.valueV)) ||
                        (!Array.isArray(this.value) &&
                            this.value)
                ) {
                    this.$refs.checkbox.setAttribute('checked', true)
                }
            }
        }
    }
</script>

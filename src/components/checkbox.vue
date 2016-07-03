<template>
    <p>
      <input type="checkbox"
             :id="id"
             :name="name"
             :value="value"
             :disabled="disabled"
             :class="classes"
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
                type: String
            },

            disabled: {
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
        }
    }
</script>
<template>
    <p>
      <input type="radio"
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
        }
    }
</script>
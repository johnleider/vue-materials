<template>
    <select :class="classes">
        <option value=""
                disabled
                selected
        >Choose your options</option>
        <slot></slot>
    </select>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'
    import BrowserDefault from '../mixins/browser-default'

    export default {
        mixins: [
            BrowserDefault,
            IsLoadable
        ],

        computed: {
            classes () {
                return Object.assign(
                    this.defaultsMixin
                )
            }
        },

        methods: {
            init () {
                $(this.$el).material_select()


                // TODO: Need to update this when bug is fixed
                // for emitting input data
                // const vm = this
                // this.$el.onchange = function () {
                //     vm.$emit('input', this.value)
                // }
            }
        }
    }
</script>
<template>
    <select>
        <option value=""
                disabled
                selected
        >Choose your options</option>
        <slot></slot>
    </select>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

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
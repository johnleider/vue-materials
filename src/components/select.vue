<template>
    <select :class="classes">
        <option value=""
                disabled
                selected
        >Choose your options</option>
        <option v-for="item in items"
                :value="item.id"
        >{{ item.text }}</option>
        <slot></slot>
    </select>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'
    import BrowserDefault from '../mixins/browser-default'

    export default {
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },

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

                const vm = this
                this.$el.onchange = function () {
                    vm.$emit('input', this.value)
                }
            }
        }
    }
</script>
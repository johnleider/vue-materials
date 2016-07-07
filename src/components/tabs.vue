<template>
    <ul class="tabs">
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            selected: {
                type: String,
                default: ''
            }
        },

        methods: {
            init () {
                if (!this.selected) {
                    $(this.$el).tabs()
                } else {
                    $(this.$el).tabs('select_tab', this.selected)
                }
            }
        }
    }
</script>

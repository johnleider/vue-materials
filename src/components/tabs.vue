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
                let params = []

                if (!this.selected) {
                   params = ['select_tab', this.selected]
                }

                $(this.$el).tabs(...params)
            }
        }
    }
</script>

<template>
    <img class="materialboxed" 
         :width="width"
         :src="src"
         :data-caption="caption"
    >
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            caption: {
                type: [Boolean, String],
                default: false
            },

            src: {
                type: String,
                required: true
            },

            width: {
                type: [Boolean, Number, String],
                default: '100%'
            }
        },

        methods: {
            init () {
                $(this.$el).materialbox()
            }
        }
    }
</script>

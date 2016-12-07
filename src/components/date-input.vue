<template>
    <input type="date" 
           class="datepicker"
    >
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        props: {
            value: {
                type: String
            },
            format: {
                type: String
            }
        },

        methods: {
            init () {
                if (this.format) $(this.$el).pickadate({format: this.format})
                else $(this.$el).pickadate()

                const picker = $(this.$el).pickadate('picker')
                picker.set('select', this.value)

                const vm = this
                this.$el.onchange = function () {
                    if (this.format)
                        vm.$emit('input', picker.get('select', this.format))
                    else
                        vm.$emit('input', picker.get('select', 'd mmmm, yyyy'))
                }
            }
        }    
    }
</script>

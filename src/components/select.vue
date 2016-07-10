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

    export default {
        props: {
            items: {
                type: Array,
                default: () => []
            }
        },

        mixins: [
            IsLoadable
        ],

        methods: {
            init () {
                $(this.$el).material_select()

                const vm = this
                this.$el.onchange = function () {
                    if (!this.hasAttribute('multiple')) {
                        vm.$emit('input', this.value)
                    } else {
                        vm.multiple(this, vm)
                    }
                }
            },

            multiple (context, vm) {
                const siblings = [...vm.$el.previousSibling.getElementsByClassName('active')].map(i => {
                    return i.getElementsByTagName('label')[0].nextSibling.nodeValue
                })

                const options = [...context.getElementsByTagName('option')]
                let array = []
                
                siblings.forEach(i => {
                    const option = options.find(j => j.textContent == i)
                    
                    if (option) {
                        array.push(option.value)
                    }
                })

                vm.$emit('input', array)
            }
        }
    }
</script>

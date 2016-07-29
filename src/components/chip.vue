<template>
    <div class="chip"
         v-if="!remove"
    >
        <slot></slot>
        <v-icon v-if="close">close</v-icon>
    </div>
</template>

<script type="text/babel">
    import IsLoadable from '../mixins/is-loadable'

    export default {
        mixins: [
            IsLoadable
        ],

        events: {
            close () {
                this.remove = true
            }
        },

        data () {
            return {
                remove: false
            }
        },

        props: {
            close: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            init () {
                if (this.remove) {
                    this.$el.addEventListener('click', () => this.$emit('close'))
                }
            }
        }
    }
</script>

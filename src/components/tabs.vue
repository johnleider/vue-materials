<template>
    <ul class="tabs">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        props: {
            selected: {
                type: String,
                default: ''
            }
        },

        mounted () {
            this.init()
        },

        methods: {
            init () {
                if (!this.selected) return

                if (document.readyState === 'complete') {
                    return this.$nextTick(() => this.load())
                }

                document.addEventListener('DOMContentLoaded', () => this.load())
            },

            load () {
                $(this.$el).tabs('select_tab', this.selected)
            }
        }
    }
</script>

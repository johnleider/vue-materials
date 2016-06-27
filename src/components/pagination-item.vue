<template>
    <li :class="options"
        @click.prevent="click"
    >
        <a href="#!">
            <slot></slot>
        </a>
    </li>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },

            color: {
                type: String,
                default: ''
            },

            disabled: {
                type: Boolean,
                default: false
            },

            waves: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            options () {
                return {
                    'active': this.active,
                    [this.color]: this.active,
                    'disabled': this.disabled,
                    'waves-effect': this.waves
                }
            }
        },

        methods: {
            click () {
                if (!this.disabled) {
                    this.$emit('click')
                }
            }
        }
    }
</script>

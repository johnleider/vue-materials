<template>
    <div :class="options">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            large: {
                type: null,
                default: false,
                coerce: val => val === ''
            },

            medium: {
                type: null,
                default: false,
                coerce: val => val === ''
            },

            panel: {
                type: null,
                default: false,
                coerce: val => val === ''
            },

            small: {
                type: null,
                default: false,
                coerce: val => val === ''
            }
        },

        computed: {
            options () {
                return {
                    'card': !this.panel,
                    'card-panel': this.panel,
                    'large': this.large,
                    'medium': this.medium,
                    'small': this.small
                }
            }
        }
    }
</script>

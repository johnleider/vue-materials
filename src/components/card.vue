<template>
    <div :class="options">
        <slot></slot>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            large: {
                type: Boolean,
                default: false
            },

            medium: {
                type: Boolean,
                default: false
            },

            panel: {
                type: Boolean,
                default: false
            },

            small: {
                type: Boolean,
                default: false
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

<template>
    <i class="material-icons"
       :class="classes"
    >
        <slot></slot>
    </i>
</template>

<script type="text/babel">
    export default {
        props: {
            tiny: {
                type: Boolean,
                default: false
            },
            
            small: {
                type: Boolean,
                default: false
            },
            
            medium: {
                type: Boolean,
                default: false
            },

            large: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'tiny': this.tiny,
                    'small': this.small,
                    'medium': this.medium,
                    'large': this.large
                }
            }
        }
    }
</script>

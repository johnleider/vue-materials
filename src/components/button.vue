<template>
    <button :class="options"
            :type="type"
            :data-target="target"
    >
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    import Button from '../mixins/button'

    export default {
        mixins: [Button],

        props: {
            target: {
                type: String,
                default: ''
            },

            type: {
                type: String,
                default: 'button'
            }
        }
    }
</script>

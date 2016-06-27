<template>
    <button class="btn"
            :class="options"
            :type="type"
    >
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    import Button from '../mixins/button'

    export default {
        mixins: [Button],

        props: {
            type: {
                type: String,
                default: 'button'
            }
        }
    }
</script>

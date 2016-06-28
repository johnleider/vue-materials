<template>
    <a :class="options"
       :href="href"
    >
        <slot></slot>
    </a>
</template>
<script>
    import Button from '../mixins/button'
    
    export default {
        mixins: [Button],

        props: {
            href: {
                type: String,
                default: '#!'
            }
        }
    }
</script>
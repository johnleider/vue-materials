<template>
    <a href="#!"
       class="carousel-item"
    >
        <img :src="src">
        <slot></slot>
    </a>
</template>

<script type="text/babel">
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>

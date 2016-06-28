<template>
    <a href="#!"
       class="carousel-item"
    >
        <img :src="src">
    </a>
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>

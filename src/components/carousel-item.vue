<template>
    <a href="#!"
       class="carousel-item"
    >
        <img :src="src">
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

<template>
    <img class="materialboxed" 
         :width="width"
         :src="src"
         :data-caption="caption"
    >
</template>

<script>
    export default {
        props: {
            caption: {
                type: String,
                default: false
            },

            src: {
                type: String,
                required: true
            },

            width: {
                type: Number,
                required: true
            }
        }
    }
</script>

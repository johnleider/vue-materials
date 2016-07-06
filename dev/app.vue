<template>
    <div>
        <carousel :srcs="srcs"></carousel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                srcs: [
                    "http://lorempixel.com/250/250/nature/1",
                    "http://lorempixel.com/250/250/nature/2",
                    "http://lorempixel.com/250/250/nature/3",
                    "http://lorempixel.com/250/250/nature/4"
                ]
            }
        }
    }
</script>
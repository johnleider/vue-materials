<template>
    <div>
        <tabs v-if="show">
            <tab target="#target1">Click me</tab>
            <tab target="#target2">Click me 2</tab>
        </tabs>
        <div id="target1">
            hi
        </div>
        <div id="target2">
            hi2
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: true
            }
        },

        mounted () {
            console.log('show')
            setTimeout(() => {
            console.log('hide')
                this.show = false

                setTimeout(() => {
            console.log('show')
                    this.show = true   
                }, 2000)
            }, 2000)
        }
    }
</script>
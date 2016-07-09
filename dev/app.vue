<template>
    <div class="container">
        <pagination :length="10" v-model="selected"></pagination>
        {{ selected }}
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        text: 'Num1'
                    },
                    {
                        id: 2,
                        text: 'Num2'
                    },
                    {
                        id: 3,
                        text: 'Num3'
                    },
                    {
                        id: 4,
                        text: 'Num4'
                    }
                ],
                range: '14 July, 2016',
                selected: 1,
                width: '45%'
            }
        },

        mounted () {
        }
    }
</script>
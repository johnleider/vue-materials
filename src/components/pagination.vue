<template>
    <ul class="pagination">
        <pagination-item :disabled="active === 1"
                         @click="prev"
        >
            <i class="material-icons">chevron_left</i>
        </pagination-item>
        <pagination-item v-if="length > 0"
                         v-for="n in length"
                         :active="active === n"
                         :waves="waves"
                         :color="color"
                         @click="page(n)"
        >
            {{ n }}
        </pagination-item>
        <pagination-item :disabled="active === length"
                         @click="next"
        >
            <i class="material-icons">chevron_right</i>
        </pagination-item>
    </ul>
</template>

<script>
    export default {
        props: {
            active: {
                type: Number,
                default: 0
            },

            color: {
                type: String,
                default: ''
            },

            length: {
                type: Number,
                default: 0
            },

            waves: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            next () {
                this.$emit('next')
            },

            page (n) {
                this.$emit('page', n)
            },

            prev () {
                this.$emit('prev')
            }
        }
    }
</script>

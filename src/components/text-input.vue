<template>
    <input class="validate"
           type="text"
           :length="length"
    >
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        mixins: [
            Counter
        ]
    }
</script>

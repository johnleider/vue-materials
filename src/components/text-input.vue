<template>
    <input class="validate"
           type="text"
           :length="length"
           :value="value"
           @input="$emit('input', $event.target.value)"
    >
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        props: ['value'],

        mixins: [
            Counter
        ]
    }
</script>

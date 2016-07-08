<template>
    <textarea class="materialize-textarea"
              :length="length"
    >
        <slot></slot>
    </textarea>
</template>

<script type="text/babel">
    import Counter from '../mixins/counter'

    export default {
        mixins: [
            Counter
        ]
    }
</script>
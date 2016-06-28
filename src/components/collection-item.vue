<template>
    <li :class="options">
        <slot></slot>
        <a href="#!" class="secondary-content">
            <slot name="secondary"></slot>
        </a>
    </li>
</template>

<script>
    import CollectionItem from '../mixins/collection-item'

    export default {
        mixins: [CollectionItem]
    }
</script>
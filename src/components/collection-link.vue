<template>
    <a href="#!"
       :class="options"
    >
        <slot></slot>
        <a href="#!" 
           class="secondary-content"
        >
            <slot name="secondary"></slot>
        </a>
    </a>
</template>

<script>
    import CollectionItem from '../mixins/collection-item'

    export default {
        mixins: [CollectionItem]
    }
</script>

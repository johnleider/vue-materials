<template>
    <a href="#!"
       :class="classes"
    >
        <slot></slot>
        <a href="#!" 
           class="secondary-content"
        >
            <slot name="secondary"></slot>
        </a>
    </a>
</template>

<script type="text/babel">
    import CollectionItem from '../mixins/collection-item'

    export default {
        mixins: [
            CollectionItem
        ],

        computed: {
            classes () {
                return this.collectionsMixin
            }
        }
    }
</script>

<template>
    <li class="avatar"
        :class="classes"
    >
        <img :src="src" 
             class="circle"
        >
        <slot></slot>
        <a href="#!" 
           class="secondary-content"
        >
            <slot name="secondary"></slot>
        </a>
    </li>
</template>

<script type="text/babel">
    import CollectionItem from '../mixins/collection-item'

    export default {
        mixins: [
            CollectionItem
        ],

        props: {
            src: {
                type: String,
                required: true
            }
        },

        computed: {
            classes () {
                return this.collectionsMixin
            }
        }
    }
</script>

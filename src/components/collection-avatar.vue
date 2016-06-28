<template>
    <li class="avatar"
        :class="options"
    >
        <img :src="src" class="circle">
        <slot></slot>
        <a href="#!" class="secondary-content">
            <slot name="secondary"></slot>
        </a>
    </li>
</template>

<script>
    import CollectionItem from '../mixins/collection-item'

    export default {
        mixins: [CollectionItem],

        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>

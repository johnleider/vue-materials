<template>
    <div class="chip">
        <slot></slot>
        <i class="material-icons"
           v-if="close"
        >
            close
        </i>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            close: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
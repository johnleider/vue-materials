<template>
    <li class="tab col"
        :class="{ 'disabled': this.disabled }"
    >
        <a :href="target"
           :class="options"
        >
            <slot></slot>
        </a>
    </li>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },

            target: {
                type: String,
                required: true
            }
        },

        computed: {
            options () {
                return {
                    'active': this.active
                }
            }
        }
    }
</script>

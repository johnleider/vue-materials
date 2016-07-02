<template>
    <li class="tab col"
        :class="{ 'disabled': this.disabled }"
    >
        <a :href="target"
           :class="classes"
        >
            <slot></slot>
        </a>
    </li>
</template>

<script type="text/babel">
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
            classes () {
                return {
                    'active': this.active
                }
            }
        }
    }
</script>

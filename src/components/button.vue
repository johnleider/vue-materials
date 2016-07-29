<template>
    <button :class="classes"
            :type="type"
            :data-induration="induration"
            :data-outduration="outduration"
            :data-constrainwidth="constrainwidth"
            :data-hover="hover"
            :data-gutter="gutter"
            :data-beloworigin="beloworigin"
            :data-alignment="alignment"
            @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script type="text/babel">
    import Buttons from '../mixins/buttons'
    import Waves from '../mixins/waves'
    import Dropdown from '../mixins/dropdown'

    export default {
        mixins: [
            Buttons,
            Waves,
            Dropdown
        ],

        props: {
            type: {
                type: String,
                default: 'button'
            }
        },

        computed: {
            classes () {
                return Object.assign(
                    this.buttonsMixin,
                    this.wavesMixin
                )
            }
        }
    }
</script>

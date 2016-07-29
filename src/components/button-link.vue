<template>
    <a :class="classes"
       :href="href"
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
    </a>
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
            href: {
                type: String,
                default: '#!'
            }
        },

        computed: {
            classes () {
                return Object.assign(
                    this.buttonsMixin,
                    this.wavesMixing
                )
            }
        }
    }
</script>

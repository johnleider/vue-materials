<template>
    <ul class="dropdown-content"
        :data-induration="induration"
        :data-outduration="outduration"
        :data-constrainwidth="constrainwidth"
        :data-hover="hover"
        :data-gutter="gutter"
        :data-beloworigin="beloworigin"
        :data-alignment="alignment"
    >
        <slot></slot>
    </ul>
</template>

<script type="text/babel">
    export default {
        props: {
            induration: {
                type: Number,
                default: 300
            },

            outduration: {
                type: Number,
                default: 225
            },

            constrainwidth: {
                type: Boolean,
                default: true
            },

            hover: {
                type: Boolean,
                default: false
            },

            gutter: {
                type: Number,
                default: 0
            },

            beloworigin: {
                type: Boolean,
                default: false
            },

            alignment: {
                type: String,
                default: 'left'
            }
        },

        computed: {
            params () {
                return {
                    inDuration: this.induration,
                    outDuration: this.outduration,
                    constrain_width: this.constrainwidth,
                    hover: this.hover,
                    gutter: this.gutter,
                    belowOrigin: this.beloworigin,
                    alignment: this.alignment
                }
            }
        }
    }
</script>

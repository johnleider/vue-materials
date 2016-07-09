<template>
    <div class="preloader-wrapper"
         :class="classes"
    >
        <div class="spinner-layer">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            active: {
                type: Boolean,
                default: false
            },

            blue: {
                type: Boolean,
                default: false
            },

            blueFlash: {
                type: Boolean,
                default: false
            },

            green: {
                type: Boolean,
                default: false
            },

            greenFlash: {
                type: Boolean,
                default: false
            },

            small: {
                type: Boolean,
                default: false
            },

            large: {
                type: Boolean,
                default: false
            },

            red: {
                type: Boolean,
                default: false
            },

            redFlash: {
                type: Boolean,
                default: false
            },

            yellow: {
                type: Boolean,
                default: false
            },

            yellowFlash: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            classes () {
                return {
                    'active': this.active,
                    'small': this.small,
                    'large': this.large,
                    'spinner-blue-only': this.blue,
                    'spinner-red-only': this.red,
                    'spinner-green-only': this.green,
                    'spinner-yellow-only': this.yellow,
                    'spinner-blue': this.blueFlash,
                    'spinner-red': this.redFlash,
                    'spinner-green': this.greenFlash,
                    'spinner-yellow': this.yellowFlash
                }
            }
        }
    }
</script>

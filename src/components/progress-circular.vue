<template>
    <div class="preloader-wrapper active"
         :class="options"
    >
        <div class="spinner-layer">
            <div class="circle-clipper left">
                <div class="circle"></div>
                </div><div class="gap-patch">
                <div class="circle"></div>
                </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
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
            options () {
                return {
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

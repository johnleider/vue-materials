<template>
    <div :id="id" 
         :class="classes"
         class="modal"
    >
        <div class="modal-content">
            <slot name="content"></slot>
        </div>
        <div class="modal-footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        props: {
            bottomSheet: {
                type: Boolean,
                default: false
            },

            id: {
                type: String,
                required: true
            },

            fixedFooter: {
                type: Boolean,
                default: false
            },

            params: {
                type: Object,
                default: () => {}
            }
        },

        computed: {
            classes () {
                return {
                    'bottom-sheet': this.bottomSheet,
                    'modal-fixed-footer': this.fixedFooter
                }
            }
        },

        methods: {
            close () {
                $(this.$el).closeModal()
                this.$emit('close')
            },
            
            open () {
                $(this.$el).openModal()
                this.$emit('open')
            }
        }
    }
</script>

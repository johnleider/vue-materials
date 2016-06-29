<template>
    <div :id="id" 
         :class="options"
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

<script>
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
                default: {}
            }
        },

        computed: {
            options () {
                return {
                    'bottom-sheet': this.bottomSheet,
                    'modal-fixed-footer': this.fixedFooter
                }
            }
        },

        methods: {
            close () {
                $(this.$el).closeModal()
            },
            
            open () {
                $(this.$el).openModal()
            }
        }
    }
</script>

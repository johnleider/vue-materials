export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },

        dismissable: {
            type: Boolean,
            default: false
        },

        header: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        collectionsMixin () {
            return {
                'active': this.active,
                'dismissable': this.dismissable,
                'collection-item': !this.header,
                'collection-header': this.header
            }
        }
    }
}

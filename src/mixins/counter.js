import Load from '../util/load'

export default {
    props: {
        length: {
            type: [Boolean, Number, String],
            default: false
        }
    },

    mounted () {
        Load.call(this, () => $(this.$el).characterCounter())
    },

    postupdate () {
        Load.call(this, () => $(this.$el).characterCounter())
    }
}

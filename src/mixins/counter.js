import Load from '../util/load'

export default {
    props: {
        length: {
            type: [Number, String, Boolean],
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

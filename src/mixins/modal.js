export default {
    methods: {
        modal () {
            this.load(() => $(this.$el).leanModal(this.params))
        }
    }
}

export default {
    methods: {
        modal () {
            this.ready(() => $(this.$el).leanModal(this.params))
        }
    }
}
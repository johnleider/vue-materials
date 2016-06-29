export default {
	methods: {
		dropdown () {
			this.load(() => $(this.$el).dropdown())
		}
	}
}

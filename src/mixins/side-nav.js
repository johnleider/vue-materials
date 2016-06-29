export default {
    props: {
        params: {
            type: Object,
            default: () => {}
        }
    },
    
	methods: {
		['side-nav'] () {
			this.load(() => $(this.$el).sideNav(this.params))
		}
	}
}

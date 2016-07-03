import Load from '../util/load'

export default {
    mounted () {
        console.log('m')
        Load.call(this, () => this.init())
    },

    updated () {
        console.log('u')
        if (typeof this.updated === 'undefined') {
            return
        }

        this.$nextTick(() => this.updated())
    },

    destroyed () {
        console.log('d')
        if (typeof this.terminate === 'undefined') {
            return
        }

        this.$nextTick(() => this.terminate())
    }
}
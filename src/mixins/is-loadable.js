import Load from '../util/load'

export default {
    mounted () {
        Load.call(this, () => this.init())
    },

    updated () {
        if (typeof this.updated === 'undefined') {
            return
        }

        Load.call(this, () => this.update())
    },

    destroyed () {
        if (typeof this.terminate === 'undefined') {
            return
        }

        Load.call(this, () => this.terminate())
    }
}

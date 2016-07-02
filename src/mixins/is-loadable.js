import Load from '../util/load'

export default {
    mounted () {
        Load.call(this, () => this.init())
    }
}
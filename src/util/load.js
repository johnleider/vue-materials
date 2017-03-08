export default function (cb) {
    if (document.readyState !== 'loading') {
        this.$nextTick(() => cb())
    } else {
        document.addEventListener('DOMContentLoaded', () => cb())
    }
}

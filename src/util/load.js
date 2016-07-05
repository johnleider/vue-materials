export default function (cb) {
    if (document.readyState === 'complete') {
        this.$nextTick(() => cb())
    } else {
        document.addEventListener('DOMContentLoaded', () => cb())
    }
}
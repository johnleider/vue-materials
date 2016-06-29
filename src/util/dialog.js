export default function Dialog(message, duration = 4000, rounded, cb) {
    if (typeof rounded === 'function') {
        cb = rounded
        rounded = ''
    }
    
    Materialize.toast(message, duration, rounded, cb)
}

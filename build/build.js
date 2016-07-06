var rollup = require('rollup')

rollup.rollup({
    entry: '../src/index.js',
    format: 'cjs',
    out: 'dist/vue-materials.common.js',
    plugins: [babel()]
})
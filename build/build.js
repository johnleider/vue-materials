var rollup = require('rollup')
var babel = require('rollup-plugin-babel')

rollup.rollup({
    entry: '../src/index.js',
    format: 'cjs',
    out: 'dist/vue-materials.common.js',
    plugins: [babel()]
})
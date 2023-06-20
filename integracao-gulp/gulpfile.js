const {series, parallel, src, dest } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')

function limparDist(cb)
{
    cb()
}

function copiarHtml(cb)
{
    cb()
}

function gerarJs(cb)
{
    cb()
}

exports.default = series(
    limparDist,
    parallel(gerarJs, copiarHtml)
)
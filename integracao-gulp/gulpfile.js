import pkg from 'gulp';
const {series, parallel, src, dest } = pkg;
import {deleteAsync} from 'del'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import tsify from 'tsify';
import rename from 'gulp-rename';
import GulpUglify from 'gulp-uglify';

function limparDist()
{
    return deleteAsync(['dist'])
}

function copiarHtml(cb)
{
    return src('public/**/*')
        .pipe(dest('dist'))
}

function gerarJs(cb)
{
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(dest('dist'))
}

function gerarJsProducao()
{
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(GulpUglify())
        .pipe(dest('dist'))
}

export default series(
    limparDist,
    parallel(gerarJs, copiarHtml),
    gerarJsProducao
)
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('kraken/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchStyles() {
    watch(['kraken/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchStyles)
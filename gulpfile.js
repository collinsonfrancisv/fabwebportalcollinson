const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {

    // 1. find scss files
    return gulp.src('./src/scss/**/*.scss')

    // 2. pass scss files through sass compiler
    .pipe(sass())

    // 3. where do I save the compiled css?
    .pipe(gulp.dest('./src/css'))

}

exports.style = style;
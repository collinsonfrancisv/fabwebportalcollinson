var gulp = require ('gulp'),
      sass = require ('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload,
      cleanCss = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      svgSprite = require('gulp-svg-sprite'),
      changed = require('gulp-changed'),
      uglify = require('gulp-uglify'),
      lineec = require('gulp-line-ending-corrector');

// svg config
var svgConfig = {
    mode: {
        symbol: { // symbol mode to build the SVG
        dest: './src/svg', // destination folder
        sprite: 'sprite.svg', //sprite name
        example: true // Build sample page
        }
    },
    svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false // don't include the !DOCTYPE declaration
    }
};

// compile scss into css
function style() {

    // 1. find and fetch scss files 
    return gulp.src('./src/scss/**/*.scss')

    // 2. then initialize sourcemaps creation. this has to come first before anything else
    .pipe(sourcemaps.init({loadMaps: true}))

    // 3. pass scss files through sass compiler
    .pipe(sass({
        outputStyle: 'expanded'
    }).on('error', sass.logError))

    // 4. pass the resulting css files into autoprefixer 
    .pipe(autoprefixer('last 3 versions'))

    // 5. create sourcemaps
    .pipe(sourcemaps.write())

    // 6. pipe into line ending correcter
    .pipe(lineec())    

    // 7. where do I save the compiled css?
    .pipe(gulp.dest('./src/css/'))

    // 4. stream changes to all browsers
    .pipe(browserSync.stream());

}

function imgmin() {
    return gulp.src('./src/images/images-source/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('./src/images/images-min'));
}

function spritePage() {
    return gulp.src('./src/svg/svg-source/**/*.svg')
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('.'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/svg/svg-source/**/*.svg', spritePage);
    gulp.watch('./src/images/images-source/**/*.*', imgmin);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.spritePage = spritePage;
exports.imgmin = imgmin;
exports.watch = watch;

var build = gulp.parallel(watch);
gulp.task('default', build);
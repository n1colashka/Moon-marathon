const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');
const rename = require('gulp-rename');


// Работаем со стилями

module.exports = function styles() {
    gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/swiper/swiper-bundle.css',
        // 'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
        // 'node_modules/slick-carousel/slick/slick.css',
        // 'node_modules/slick-carousel/slick/slick-theme.css',
    ])
        .pipe(concat('libs.css'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/css'));
    return gulp.src('app/scss/style.scss')
        .pipe(plumber())
        .pipe(gulpif(!argv.prod, sourcemaps.init()))
        .pipe(scss())
        .pipe(autoprefixer({
            overrideBrowserslist:  [ "last 10 version" ],
            cascade: false
        }))
        .pipe(gulpif(argv.prod, cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
        })))
        .pipe(gulpif(!argv.prod, sourcemaps.write()))
        .pipe(gulp.dest('dist/css/'))
};

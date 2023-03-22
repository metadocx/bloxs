const gulp = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');
const terser = require('gulp-terser');
const cleanCSS = require('gulp-clean-css');
const cssmin = require('gulp-cssmin');
const obfuscator = require('gulp-javascript-obfuscator');
const sourcemaps = require('gulp-sourcemaps');

/**
 * DEV JS
 */
gulp.task('build-dev', function () {
    return gulp.src(['js/imports/*.js', 'js/core/*.js', 'js/bloxs/*.js',
        'js/modules/*.js', 'js/locales/*.js', 'js/bootstrap/*.js'])
        .pipe(order([
            'js/imports/*.js',
            'js/core/*.js',
            'js/bloxs/*.js',
            'js/modules/*.js',
            'js/locales/*.js',
            'js/bootstrap/*.js',
        ], { base: __dirname }))
        .pipe(concat('metadocx.bloxs.js'))
        .pipe(gulp.dest('dist'));

});

/**
 * DEV CSS
 */
gulp.task('build-dev-css', function () {
    return gulp.src(['css/**/*.css'])
        .pipe(order([
            'css/**/*.css',
        ], { base: __dirname }))
        .pipe(concat('metadocx.bloxs.css'))
        .pipe(gulp.dest('dist'));

});

/**
 * min JS
 */
gulp.task('build-prod', function () {
    return gulp
        .src(['js/imports/*.js', 'js/core/*.js', 'js/bloxs/*.js',
            'js/modules/*.js', 'js/locales/*.js',
            'js/bootstrap/*.js'])
        .pipe(order([
            'js/imports/*.js',
            'js/core/*.js',
            'js/bloxs/*.js',
            'js/modules/*.js',
            'js/locales/*.js',
            'js/bootstrap/*.js',
        ], { base: __dirname }))
        .pipe(concat('metadocx.bloxs.min.js'))
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(obfuscator({
            compact: true
        }))
        .pipe(sourcemaps.write('maps/'))
        .pipe(gulp.dest('dist'));

});



/**
 * CSS Production (min)
 */
gulp.task('build-prod-css', function () {
    return gulp
        .src(['css/**/*.css'])
        .pipe(concat('metadocx.bloxs.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist'));

});  

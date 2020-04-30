const { series, parallel } = require('gulp');
/*
function clean(cb) {
    cb();
}

function rename(cb) {
    cb();
}

function helloTask(cb) {

    cb();
}

function javascript(cb) {
    cb();
}

function css(cb) {
    cb();
}
exports.build = series(
    clean,
    parallel(
        javascript,
        css,
    ),
    helloTask
);
//exports.build = parallel(helloTask, javascript, css);
//exports.build = series(helloTask, javascript, css);


exports.css = css;
exports.js = javascript;
exports.default = helloTask;
*/

const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-uglifycss');
const image = require('gulp-image');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

sass.compiler = require('node-sass');

function javascript() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyJS())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('dist/assets/js'));

}

function css() {
    return src('src/css/*.css')
        .pipe(minifyCSS({ maxLineLen: 80, expandVars: true, "uglyComments": true }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('dist/assets/css'));
}

function optimizeImage() {
    return src('src/images/*.png')
        .pipe(image())
        .pipe(dest('dist/assets/images'));
}

function convertSass() {
    return src('src/css/*.scss')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('dist/assets/css'));
}

exports.default = parallel(javascript, css, convertSass, optimizeImage);
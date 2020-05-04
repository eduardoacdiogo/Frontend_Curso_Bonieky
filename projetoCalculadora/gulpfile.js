const { src, dest, serie, parallel } = require('gulp');
const rename = require('gulp-rename');
const cssimport = require('gulp-cssimport');
const minifyjs = require('gulp-uglify');
const minifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function base() {
    return src('src/templates/*.html')
        .pipe(dest('public/'));
}

function javascript() {
    return src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyjs())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('public/assets/js'));
}

function css() {
    return src('src/css/*.css')
        .pipe(cssimport())
        .pipe(sass())
        .pipe(minifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('public/assets/css'));
}

exports.default = parallel(base, javascript, css);
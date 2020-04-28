const { series, parallel } = require('gulp');

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

/*
exports.css = css;
exports.js = javascript;
exports.default = helloTask;
*/
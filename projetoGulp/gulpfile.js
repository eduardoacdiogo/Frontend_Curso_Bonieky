function helloTask(cb) {


    cb();
}

function javascript(cb) {
    cb();
}

function css(cb) {
    cb();
}

exports.css = css;
exports.js = javascript;
exports.default = helloTask;
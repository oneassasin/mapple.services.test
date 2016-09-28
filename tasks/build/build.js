var runSequence = require('run-sequence');

module.exports = function (gulp) {
    gulp.task('build', function (done) {
        runSequence(
            'build:css',
            'build:js',
            'build:pug',
            'copy:tmpls',
            'clean:tmpls',
            done
        );
    });
};

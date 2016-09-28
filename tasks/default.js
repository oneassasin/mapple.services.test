var runSequence = require('run-sequence');

module.exports = function (gulp) {
    gulp.task('default', function (done) {
        runSequence(
            'clean:all',
            'copy',
            'build',
            'serve',
            done
        );
    });
};

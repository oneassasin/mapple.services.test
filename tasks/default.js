var runSequence = require('run-sequence');

module.exports = function (gulp, config, plugins) {
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

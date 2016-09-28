var runSequence = require('run-sequence');

module.exports = function (gulp, config, plugins) {
    gulp.task('copy', function (done) {
        runSequence(
            'copy:license',
            'copy:misc',
            'copy:fonts',
            'copy:vendorCSS',
            'copy:vendorJS',
            done
        );
    });
};

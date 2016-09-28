var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

module.exports = function (gulp, config, plugins) {
    gulp.task('serve', function () {
        browserSync.init({
            server: './' + config.dist.folderName
        });
        plugins.watch(config.src + '/**/*.pug', function () {
            runSequence(
                'build:pug',
                'copy:tmpls',
                'clean:tmpls',
                browserSync.reload
            );
        });
        plugins.watch(config.src + '/**/*.css', function () {
            gulp.start('build:stylus');
        });
        plugins.watch(config.src + '/**/*.js', function () {
            gulp.start('build:js');
        });
        plugins.watch(config.dist.folderName + '/*.html', browserSync.reload);
        plugins.watch(config.dist.folderName + '/**/*.css', browserSync.reload);
        plugins.watch(config.dist.folderName + '/**/*.js', browserSync.reload);
    });
};

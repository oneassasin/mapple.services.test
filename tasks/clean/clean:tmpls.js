module.exports = function (gulp, config, plugins) {
    gulp.task('clean:tmpls', function () {
        return gulp
            .src(config.dist.folderName + '/app', {
                read: false
            })
            .pipe(plugins.plumber())
            .pipe(plugins.clean())
            .pipe(plugins.plumber.stop());
    });
};

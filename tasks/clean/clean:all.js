module.exports = function (gulp, config, plugins) {
    gulp.task('clean:all', function () {
        return gulp
            .src(config.dist.folderName, {
                read: false
            })
            .pipe(plugins.plumber())
            .pipe(plugins.clean())
            .pipe(plugins.plumber.stop());
    });
};

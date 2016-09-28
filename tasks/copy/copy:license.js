module.exports = function (gulp, config, plugins) {
    gulp.task('copy:license', function () {
        return gulp
            .src('LICENSE')
            .pipe(plugins.plumber())
            .pipe(gulp.dest(config.dist.folderName))
            .pipe(plugins.plumber.stop());
    });
};

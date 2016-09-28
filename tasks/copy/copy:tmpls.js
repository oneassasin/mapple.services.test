module.exports = function (gulp, config, plugins) {
    gulp.task('copy:tmpls', function () {
        return gulp
            .src(config.dist.folderName + '/app/**/*.tmpl.html')
            .pipe(plugins.plumber())
            .pipe(plugins.rename({
                dirname: ''
            }))
            .pipe(gulp.dest(config.dist.folderName + '/' + config.dist.tmpls))
            .pipe(plugins.plumber.stop());
    });
};

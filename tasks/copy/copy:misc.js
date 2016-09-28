module.exports = function (gulp, config, plugins) {
    gulp.task('copy:misc', function () {
        var files = [
            config.src + '/*',
            config.src + '/img',
            '!' + config.src + '/app',
            '!' + config.src + '/**/*.pug',
            '!' + config.src + '/**/*.styl'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(gulp.dest(config.dist.folderName))
            .pipe(plugins.plumber.stop());
    });
};

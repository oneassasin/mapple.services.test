module.exports = function (gulp, config, plugins) {
    gulp.task('build:css', function () {
        var files = [
            config.src + '/**/*.css'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(plugins.concat('main.css'))
            .pipe(gulp.dest(config.dist.folderName + '/' + config.dist.css))
            .pipe(plugins.plumber.stop());
    });
};

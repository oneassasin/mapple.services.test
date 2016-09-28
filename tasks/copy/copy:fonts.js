module.exports = function (gulp, config, plugins) {
    gulp.task('copy:fonts', function () {
        var files = [
            'bower_components/**/*.ttf',
            'bower_components/**/*.svg',
            'bower_components/**/*.eot',
            'bower_components/**/*.woff',
            'bower_components/**/*.woff2',
            config.src + '/**/*.ttf',
            config.src + '/**/*.svg',
            config.src + '/**/*.eot',
            config.src + '/**/*.woff',
            config.src + '/**/*.woff2'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(plugins.rename({
                dirname: ''
            }))
            .pipe(gulp.dest(config.dist.folderName + '/css'))
            .pipe(plugins.plumber.stop());
    });
};

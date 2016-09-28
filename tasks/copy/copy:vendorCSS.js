module.exports = function (gulp, config, plugins) {
    gulp.task('copy:vendorCSS', function () {
        var files = [
            'node_modules/normalize.css/normalize.css',
            'bower_components/**/**/*.css'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(plugins.ignore.exclude('**/*.min.css'))
            .pipe(plugins.concat('vendor.css'))
            .pipe(gulp.dest(config.dist.folderName + '/' + config.dist.css))
            .pipe(plugins.plumber.stop());
    });
};

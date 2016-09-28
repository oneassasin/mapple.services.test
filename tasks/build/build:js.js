module.exports = function (gulp, config, plugins) {
    gulp.task('build:js', function () {
        var files = [
            config.src + '/app/**/*.module.js',
            config.src + '/app/**/*.js'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(plugins.babel())
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.angularFilesort())
            .pipe(plugins.concat('main.js'))
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest(config.dist.folderName + '/' + config.dist.js))
            .pipe(plugins.plumber.stop());
    });
};

module.exports = function (gulp, config, plugins) {
    gulp.task('copy:vendorJS', function () {
        var files = [
            'bower_components/api-check/dist/*.js',
            'bower_components/angular/*.js',
            'bower_components/**/*.js'
        ];
        return gulp
            .src(files)
            .pipe(plugins.plumber())
            .pipe(plugins.ignore.exclude('**/*.min.js'))
            .pipe(plugins.ignore.exclude('**/index.js'))
            .pipe(plugins.ignore.exclude('**/*(G|g)runt*.js'))
            .pipe(plugins.ignore.exclude('**/*gulp*.js'))
            .pipe(plugins.ignore.exclude('**/package.js'))
            .pipe(plugins.ignore.exclude('**/karma.conf.js'))
            .pipe(plugins.ignore.exclude('**/src/**/*.js'))
            .pipe(plugins.ignore.exclude('**/scripts/**/*.js'))
            .pipe(plugins.ignore.exclude('bootstrap/**/*.js'))
            .pipe(plugins.ignore.exclude('jquery/**/*.js'))
            .pipe(plugins.wrap('//<%= file.path %>\n<%= contents %>'))
            .pipe(plugins.concat('vendor.js'))
            .pipe(gulp.dest(config.dist.folderName + '/' + config.dist.js))
            .pipe(plugins.plumber.stop());
    });
};

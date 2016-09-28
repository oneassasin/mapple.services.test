module.exports = function (gulp, config, plugins) {
    gulp.task('build:pug', function () {
        return gulp
            .src(config.src + '/**/*.pug')
            .pipe(plugins.plumber())
            .pipe(plugins.inject(gulp.src([
                config.dist.folderName + '/**/vendor*',
                config.dist.folderName + '/**/*.js',
                config.dist.folderName +  '/**/*.css'
            ]), {
                ignorePath: config.dist.folderName,
                addRootSlash: false
            }))
            .pipe(plugins.pug({
                pretty: true
            }))
            .pipe(gulp.dest(config.dist.folderName))
            .pipe(plugins.plumber.stop());
    });
};


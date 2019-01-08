var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify');
    rename = require('gulp-rename');
    source = require('vinyl-source-stream');
    browserifyCss = require('browserify-css');
    browserSync = require('browser-sync').create();

gulp.task('build',function(){
    return browserify('./src/views/index.jsx')
           .transform(babelify)
           .transform(browserifyCss)
           .bundle()
           .pipe(source('./src/index.jsx'))
           .pipe(rename('bundle.js'))
           .pipe(gulp.dest('./dist'))
           .pipe(browserSync.stream());
});

gulp.task('watch',function(){
    browserSync.init({
        server:"./dist"
    })
    gulp.watch('./src/**/*.jsx', gulp.series('build')).on('change',browserSync.reload);
});

gulp.task('default',gulp.series('build','watch'));
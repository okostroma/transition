
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');


gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions']
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
    // .pipe(browserSync.reload({stream: true}))
});

gulp.task ('watch', function(){
    gulp.watch('sass/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('html'));
    gulp.watch('js/*.js', gulp.parallel('script'))
});

gulp.task('html', function(){
    return gulp.src('*.html')
    //.pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
    return gulp.src('js/*.js')
    //.pipe(browserSync.reload({stream: true}))
});
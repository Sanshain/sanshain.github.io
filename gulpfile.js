//@ts-check

const gulp = require('gulp');
const less = require('gulp-less');
const include = require('gulp-include');
const { watch, series } = require('gulp');


const lessPath = './style/less/**/*.less';
const htmlPath = './source/**/*.html';


gulp.task('less', function () {
    return gulp.src(lessPath)
        .pipe(less({}))
        .pipe(gulp.dest('./style'));
});


gulp.task('build', function () {
    return gulp.src('source/index.html')
        .pipe(include()).on(
            'error', console.log
        )
        .pipe(gulp.dest('.'))
});

gulp.task('watch', function () {
    
    // Вы можете использовать одну задачу
    watch(lessPath, gulp.series('less'));
    
    // Или составную задача
    watch(htmlPath, gulp.series('build'));
    watch('./css/*.css', gulp.series('build'));
});
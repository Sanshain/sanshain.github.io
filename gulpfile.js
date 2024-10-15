//@ts-check

const gulp = require('gulp');

const less = require('gulp-less');
const include = require('gulp-include');
// var concatCss = require('gulp-concat-css');  -> use @imports
const minhtml = require('gulp-htmlmin');

const { watch, series } = require('gulp');


const lessPath = './style/less/**/*.less';
const htmlPath = './web/**/*.html';


gulp.task('less', function () {
    return gulp.src(lessPath)
        .pipe(less({}))
        .pipe(gulp.dest('./style'));
});


gulp.task('build', function () {
    return gulp.src('web/**/index.html')
        .pipe(include())
        .pipe(minhtml({ collapseWhitespace: true })).on(
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
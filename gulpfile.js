const gulp = require('gulp');
const ejs = require('gulp-ejs');
const gutil = require('gulp-util');
const image = require('gulp-image');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

////////template engie

gulp.task('ejs', function () {
  gulp.src('./base/pages/*.ejs')
      .pipe(ejs()
      .on('error', gutil.log))
      .pipe(rename(function(path) {
           path.extname = ".html"
       }))
      .pipe(gulp.dest('./dist'));
});

////////template engie

///////////optimzation if images

gulp.task('image', function () {
  gulp.src('./base/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

///////////optimzation if images

///////////sass

gulp.task('sass', function () {
  return gulp.src('./base/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));;
});

gulp.task('css', function () {
    gulp.src('./base/css/**/*.css')
    .pipe(gulp.dest('./dist/css'));
});

///////////sass

///////////babel

gulp.task('babel', (cb) => {
    return gulp.src('./base/es6/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({
          stream: true
        }));
});
gulp.task('js', function () {
    gulp.src('./base/js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
});

///////////babel

///////////browserSync

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
  })
})

///////////browserSync

gulp.task('default', ['ejs','image','sass','babel','css','js','browserSync'], function (){
  gulp.watch('./base/pages/**/*.ejs', ['ejs']);
  gulp.watch('./base/images/*', ['image']);
  gulp.watch('./base/sass/**/*.scss', ['sass']);
  gulp.watch('./base/es6/*.js', ['babel']);
  gulp.watch('./base/sass/**/*.scss', browserSync.reload);
  gulp.watch('./base/es6/*.js', browserSync.reload);
  gulp.watch('./base/pages/**/*.ejs', browserSync.reload);
});

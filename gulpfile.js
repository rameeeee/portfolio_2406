var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var buffer = require('vinyl-buffer');
var browserSync = require('browser-sync');



gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(
            autoprefixer({
              cascade: false
            })
        )
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream({match:'**/*.css'})); // broswer-sync로 전송 추가
});

gulp.task('sprite', function() {
    var spriteData = gulp.src('src/sprites/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: '_sprite.scss',
            imgPath: '../img/sprite.png'
        }));
    var imgStream = new Promise(function(resolve) {
        spriteData.img
          .pipe(buffer())
          .pipe(imagemin())
          .pipe(gulp.dest("src/img/"))
          .on("end", resolve);
    });
        
    var cssStream = new Promise(function(resolve) {
        spriteData.css
            .pipe(gulp.dest('src/scss/'))
            .on('end',resolve);
    });

    

    return Promise.all([imgStream, cssStream]);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch',['browser-sync'],function() {
    gulp.watch('src/scss/*.scss',['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default',['watch']);

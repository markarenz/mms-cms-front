// CONFIG
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var deporder = require('gulp-deporder');
var stripdebug = require('gulp-strip-debug');
// npm i gulp gulp-cssnano gulp-sass gulp-concat gulp-rename gulp-uglify gulp-deporder gulp-strip-debug

/* TASKS */

/* SCSS/SASS Interpreter */

/* Run this only when you need to recompile Bootstrap CSS */
gulp.task('app-css', function(){
   return gulp.src('resources/sass/app.scss')
       .pipe(sass())
         .on('error', function (err) {
           console.log(err.toString());
           this.emit('end');
       })
      .pipe(cssnano({zindex: false}))
      .pipe(gulp.dest('public/css/'));
});

gulp.task('css', function(){
   return gulp.src('src/css/scss/style.scss')
      .pipe(sass())
        .on('error', function (err) {
          console.log(err.toString());
          this.emit('end');
          })
      .pipe(cssnano({zindex: false}))
      .pipe(gulp.dest('src/css/'));
});


/* JS Concatenator */
gulp.task('js', function(){
//public/js/app.js
    return gulp.src(['resources/js/frontend/_partials/*.js'])
        .pipe(concat('frontend.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

/* WATCH */
gulp.task('watch', function(){
    gulp.watch('src/css/scss/**/*.scss', gulp.series('css') );
    gulp.watch('src/css/scss/_partials/*.scss', gulp.series('css') );
//    gulp.watch('resources/js/frontend/_partials/*.js', gulp.series('js') );
});

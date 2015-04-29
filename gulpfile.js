var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  var watcher = gulp.watch('./sass/*.scss', ['sass']);

  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running node-sass compiler...');
  });
});

gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
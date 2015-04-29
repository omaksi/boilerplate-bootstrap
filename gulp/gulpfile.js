var gulp = require('gulp');
var sass = require('gulp-sass');
var clc = require('cli-color');

gulp.task('watch-scss', function() {
  var watcher = gulp.watch('../scss/*.scss', ['sass']);

  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running node-sass compiler...');
  });
});

gulp.task('sass', function () {
    gulp.src('../scss/*.scss')
        .pipe(sass())
        .on('error', function(err){ console.log(clc.red('ERROR: ') + err.message); })
        .pipe(gulp.dest('../css'));
});

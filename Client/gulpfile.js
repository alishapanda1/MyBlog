var gulp = require('gulp');
var browserify=require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('Source/js/Main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('Main.js'))
    .pipe(gulp.dest('Destination/js'));
});

gulp.task('copy',function(){
  gulp.src('Source/index.html')
    .pipe(gulp.dest('Destination'));

});

gulp.task('default',['browserify','copy'],function(){
  return gulp.watch('source',['browserify','copy']);
});

var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('html', function(){
  gulp.src('./src/*.html')
  .pipe(gulp.dest('compiled'))
  .pipe(reload({stream: true}))
});

gulp.task('serve', ['build'], function(){
	browserSync({
		server: {
      baseDir: './compiled'
    }
	});
});

gulp.task('images', function(){
  gulp.src('./src/images/*.html')
    .pipe(gulp.dest('compiled/images/'))
    .pipe(reload({stream: true}))
});

gulp.task('styles', function(){
	gulp.src('./src/styles/main.scss')
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(gulp.dest('./compiled/css/'))
	.pipe(reload({stream: true}))
});

function handleErrors() {
	notify.onError({
		title: 'Compile Error',
		message: '<%= error.message %>'
	}).apply(this.args);
	this.emit('end');
}

function buildScript(file, watch) {
	var props = {
	  entries: ['./src/scripts/' + file],
	  debug : true,
	  transform:  [babelify.configure({presets : ['es2015', 'react'] })]
	};

	// watchify() if watch requested, otherwise run browserify() once 
	var bundler = watch ? watchify(browserify(props)) : browserify(props);

	function rebundle() {
	  var stream = bundler.bundle();
	  return stream
	    .on('error', notify.onError({
        title: 'Compile error',
        message: '<%= error.message%>'
      }))
	    .pipe(source(file))
	    .pipe(gulp.dest('./compiled/scripts'))
	    // If you also want to uglify it
	    // .pipe(buffer())
	    // .pipe(uglify())
	    // .pipe(rename('app.min.js'))
	    // .pipe(gulp.dest('./build'))
	    .pipe(reload({stream:true}))
	}

	// listen for an update and run rebundle
	bundler.on('update', function() {
	  rebundle();
	  gutil.log('Rebundle...');
	});

	// run it once the first time buildScript is called
	return rebundle();
}

gulp.task('scripts', function() {
  return buildScript('main.js', false); // this will once run once because we set watch to false
});

gulp.task('build', ['html', 'scripts', 'styles', 'images']);

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['serve'], function() {
  gulp.watch('src/styles/**/*', ['styles']); // gulp watch for scss changes
  gulp.watch('src/images/**/*', ['images']); // gulp watch for images changes
  gulp.watch('src/*.html', ['html']); // if we change the HTML, change it
  return buildScript('main.js', true); // browserify watch for JS changes
});
var fs = require('fs'),
gulp = require('gulp'),
gutil = require('gulp-util'),
webpack = require('webpack'),
uglify = require('uglify-js'),
compileConstructor = require('./compiler.js');

var DEST = './dist',
INDEX = './index.js',
LIB = 'ubique',
FILENAME = 'ubique.js',
FULLFILE = DEST + '/' + FILENAME;


var compileWebpack = webpack({
	cache: true,
	entry: INDEX,
	output: {
		library: LIB,
		libraryTarget: 'umd',
		path: DEST,
		filename: FILENAME
	}
});

gulp.task('bundle',function (cb) {

	//compile constructor
	compileConstructor();

	compileWebpack.run(function(err,stats) {
		if (err) {
			gutil.log(err);
		}
		gutil.log('Bundled done!');

		cb();
	});
});

gulp.task('minify', ['bundle'], function () {

	fs.writeFileSync(DEST + '/' + LIB + '.min.js',uglify.minify([FULLFILE],null).code);

	gutil.log('Minified done!')
});

gulp.task('watch',['bundle','minify'], function() {
	gulp.watch(['index.js','lib/**/*.js'],['bundle','minify']);
});

// default
gulp.task('default',['bundle','minify']);


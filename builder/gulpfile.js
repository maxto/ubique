var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var uglify = require('uglify-js');

var compiler = require('./compiler.js');
var docgen = require('./docgen.js');

var compileWebpack = webpack({
	cache: true,
	entry: './../index.js',
	output: {
		library: 'ubique',
		libraryTarget: 'umd',
		path: './../dist',
		filename: 'ubique.js'
	}
});

gulp.task('bundle',[],function (cb) {

	//compile constructor
	new compiler();

	compileWebpack.run(function(err,stats) {
		if (err) {
			gutil.log(err);
		}
		gutil.log('Code bundled!');

		cb();
	});
});

gulp.task('minify', ['bundle'], function () {

	fs.writeFileSync('./../dist/ubique.min.js',uglify.minify(['./../dist/ubique.js'],null).code);
	fs.writeFileSync('./../../maxto.github.io/ubique.min.js',uglify.minify(['./../dist/ubique.js'],null).code);

	gutil.log('Code minified!');
});

gulp.task('docgen',[],function(){

	docgen.run();
	gutil.log('Doc generated!');

})

// default
gulp.task('default',['bundle','minify','docgen']);


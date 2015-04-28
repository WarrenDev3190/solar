var gulp = require('gulp'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	nodemon = require('gulp-nodemon'),
	browserSync = require('browser-sync'),
	bourbon = require('node-bourbon').includePaths,
	neat = require('node-neat').includePaths,
	refills = require('node-refills').includePaths;


	gulp.task('sass',function(){
		gulp.src('public/sass/main.scss')
			.pipe(sass({
					includePaths:['sass'].concat(bourbon).concat(neat).concat(refills),
					errLogToConsole:true
			}))
			.pipe(gulp.dest('public/css'));
	});

	gulp.task('nodemon',function(cb){
		var called = false;
		return nodemon({
			script: 'app.js',
			watch: ['app.js','public/**/*.*']
		})
		.on('start',function onStart(){
			if(!called){cb();}
			called = true;
		})
		.on('restart',function onRestart(){
			setTimeout(function reload(){
				browserSync.reload({
					stream:false
				});
			},500);
		});
	});

	gulp.task('browser-sync',['nodemon'],function(){
		browserSync.init({
			files:['public/**/*.*'],
			proxy:'http://localhost:8000',
			port:4000,
			browser:['google chrome']
		});
	});

	gulp.task('watch',function(){
		gulp.watch('public/sass/main.scss',['sass']);
	});

	gulp.task('default',['watch','browser-sync']);
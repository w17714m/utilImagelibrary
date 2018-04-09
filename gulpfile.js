var gulp = require('gulp'), 
    browserify = require('browserify'), 
    watchify = require('watchify'), 
    source = require('vinyl-source-stream'),
    run = require('gulp-run-command').default,
    browserSync = require('browser-sync').create(),
    watch = require('gulp-watch'),
    gulpCopy = require('gulp-copy');

   
var entry = 'src/index.js'; //Script de entrada 
var args = watchify.args; 
args.debug = true; //Genera el sourcemap para debuguear
args.fullPaths = false; //Evita el uso de paths absolutos 

var bundler = watchify(browserify(entry, args)); 

function createBundle(){ 
    console.log('contruyendo archivos'); 
    browserSync.reload();
    return bundler.bundle() 
        .pipe(source('wjcq_lib_util.js'))
        .pipe(gulp.dest('./build')); 
} 


//Travis CI account integración continua
//Coveralls account traking repositories

function runServe(){ 
   // run('http-server');
} 


// Static server
gulp.task('run',['dev'], function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});



// Static server
gulp.task('copy', function() {
    browserSync.reload();
    return gulp
    .src(['./src/index.html','./src/*.jpg'])
    .pipe(gulpCopy('./build', { prefix: 1 }));
    
});

gulp.task('server',['dev','copy','run'] ,runServe);
gulp.task('dev', createBundle); 
gulp.task('js-watch', function (done) {
    browserSync.reload();
    done();
});
gulp.watch("./*.html", ['js-watch']);


bundler.on('update', createBundle); 
bundler.on('time', function(time){ 
    console.log('Done at ' + (time/1000)); 
});
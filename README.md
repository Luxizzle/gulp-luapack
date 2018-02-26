# gulp-luapack

A gulp plugin to build with luapack

## Usage

```js
const gulp = require('gulp')
const luapack = require('gulp-luapack')
const rename = require('gulp-rename')

gulp.task('pack', function() { // create a new gulp task
  return gulp.src('./file.lua') // load main file
		.pipe(luapack()) // pipe into luapack
		.pipe(rename('file.packed.lua')) // rename file
		.pipe(gulp.dest('./')); // output file
});
```
Small thing to keep a note of is that `gulp-luapack` does not take care of minifying code. There is `gulp-luamin` for that.
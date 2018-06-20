const gulp = require("gulp");

const gulpImageMin = require("gulp-imagemin");

gulp.task("default", function () {

  return gulp
    .src("./static/**/*")
    .pipe(gulpImageMin())
    .pipe(gulp.dest("./static"));

});

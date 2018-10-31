const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const purify = require("gulp-purifycss");

// Styles
gulp.task("styles", function() {
    return gulp
        .src("styles/**/*.scss")
        .pipe(concat("styles.scss"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./"));
});

//PurifyCss
gulp.task("purify", function() {
    return gulp
        .src("./styles.css")
        .pipe(purify(["./scripts.js", "./index.html"]))
        .pipe(gulp.dest("./"));
});

//Scripts
gulp.task("scripts", function() {
    gulp.src("scripts/scripts.js")
        .pipe(uglify())
        .pipe(gulp.dest("./"));
});

const buildTasks = ["styles", "purify", "scripts"];

gulp.task("build", buildTasks);

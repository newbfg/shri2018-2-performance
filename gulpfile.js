const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify-es").default;

// HTML
gulp.task("html", () => {
    return gulp
        .src("pages/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./"));
});

// Styles
gulp.task("styles", function() {
    return gulp
        .src("styles/**/*.scss")
        .pipe(concat("styles.scss"))
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./"));
});

//Scripts
gulp.task("scripts", function() {
    gulp.src("scripts/scripts.js")
        .pipe(uglify())
        .pipe(gulp.dest("./"));
});

const buildTasks = ["html", "styles", "scripts"];

gulp.task("build", buildTasks);

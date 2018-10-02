const gulp = require("gulp");
const spritesmith = require("gulp.spritesmith");
gulp.task("sprite", function(){
    var spriteData = gulp.src("src/images/*.png").pipe(spritesmith({
        imgName : "sprite.png",
        cssName : "style.css"
    }));
    spriteData.img.pipe(gulp.dest("dist/images"));
    spriteData.css.pipe(gulp.dest("dist/style"));
});
gulp.task("default",["sprite"]);
import webp from "gulp-webp";
import avif from "gulp-avif";
import imagemin from "gulp-imagemin";

export const images = () => { 
  return app.gulp.src(app.path.src.images)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        massage: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.newer(app.path.build.zmin))   
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 - 7
    })) 

    // создание других форматов
    // .pipe(app.gulp.dest(app.path.build.zmin))

    // .pipe(app.gulp.src(app.path.src.zmin))
    // .pipe(app.plugins.newer(app.path.build.zimages))
    // .pipe(avif())
    // .pipe(app.gulp.dest(app.path.build.zimages))

    // .pipe(app.gulp.src(app.path.src.zmin))
    // .pipe(app.plugins.newer(app.path.build.zimages))
    // .pipe(webp())
    // END создание других форматов

    .pipe(app.gulp.dest(app.path.build.zimages))
    
    // .pipe(app.plugins.browsersync.stream());
}
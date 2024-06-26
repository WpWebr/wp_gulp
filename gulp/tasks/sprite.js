import svgSprite from "gulp-svg-sprite";

export const sprite = () => {
  return app.gulp.src(`${app.path.src.svgicons}`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SVG",
        massage: "Error: <%= error.message %>"
      })
    ))
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: `../icons/icons.svg`,
          // Создавать страницу с перечнем иконок
          example: true
        }
      }
    }))
    .pipe(app.gulp.dest(`${app.path.build.svgicons}`));
}
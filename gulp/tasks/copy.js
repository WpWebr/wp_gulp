export const copy = () => {
  return app.gulp.src(app.path.src.files)
    .pipe(app.gulp.dest(app.path.build.files))
}
export const copyfonts = () => {
  return app.gulp.src(app.path.src.zfonts)
    .pipe(app.gulp.dest(app.path.build.fonts))
}
export const copyImg = () => {
  return app.gulp.src(app.path.src.zimages)
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.zminimg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.svg))
    // .pipe(app.plugins.browsersync.stream());
}
export const copyImages = () => {
  return app.gulp.src(app.path.src.alimages)
    .pipe(app.gulp.dest(app.path.build.images))
    // .pipe(app.plugins.browsersync.stream());
}
export const copySprite = () => {
  return app.gulp.src(app.path.src.icons)
    .pipe(app.gulp.dest(app.path.build.icons))
}

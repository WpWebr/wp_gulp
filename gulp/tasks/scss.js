import dartSass from 'sass';          // Препроцесор SASS 
import gulpSass from 'gulp-sass';     // Установщик препроцесора SASS в Gulp
import rename from 'gulp-rename';     // Переименование файлов

import cleanCss from 'gulp-clean-css';                            // Сжатие CSS файла
import webpcss from 'gulp-webpcss';                               // Вывод WEBP изображений
import autoprefixer from 'gulp-autoprefixer';                     // Добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries';  // Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        massage: "Error: <%= error.message %>"
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../images/'))
    .pipe(sass({
      // outputStyle: 'compressed'
      outputStyle: 'expanded'
    }))
    // Добавляем в CSS стили для подключения поддерживаемых форматов
    // .pipe(webpcss({
    //   replace_to: '.avif',
    //   webpClass: '.avif'
    // }))
    // .pipe(webpcss({
    //   webpClass: '.webp',
    //   noWebpClass: 'no-webp'
    // }))
    .pipe(groupCssMediaQueries())
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    .pipe(app.gulp.dest(app.path.build.css)) // Раскомментировать если нужен не сжатый дубль файла `.css`
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
}
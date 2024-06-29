import fileInclude from 'gulp-file-include';       // для разбиения HTML на компоненты (собирает компаненты)
// import webpHtmlNosvg from 'gulp-webp-html-nosvg';  // Контейнер _picture_ для .webp формата картинок

import pictureHTML from 'gulp-picture-html';  // Контейнер _picture_ для .webp формата картинок
// 

import htmlmin from 'gulp-htmlmin'              // Сжатие HTML
import formatHtml from 'gulp-format-html' // разжатие/форматирование

// import avifWebp from 'gulp-avif-webp';        // Контейнер _picture_ для .webp и .avif формата картинок
// import avifWebpHTML from 'gulp-avif-webp-html';    // Контейнер _picture_ для .webp и .avif формата картинок

import versionNumber from 'gulp-version-number';   // Динамическая версия файла для .js, .css
import pugs from 'gulp-pug';                      // PUG



export const html = () => {
  return app.gulp.src(app.path.src.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "HTML",
        massage: "Error: <%= error.message %>"
      })
    ))
    .pipe(
      app.plugins.if(
        (pug === 'html'), // если HTML
        fileInclude() // собираем компаненты HTML
      )
    )
    .pipe(
      app.plugins.if(
        (pug === 'pug'), // если PUG
        // true,
        pugs({ // для Pug
          //Сжатие HTML файла
          pretty: true,
          // Показывать в терминале какой файл обработан
          verbose: true
        })
      )
    )
    .pipe(app.plugins.replace(/@img\//g, './images/')) // заменяем `@img/` на `images/`
    // начали - добавляем <picture>
    // .pipe(htmlmin()) // сжимаем
    // .pipe(pictureHTML( // добавляем <picture>
    //   // options:
    //   {
    //     // extensions:['.png','.jpg'],  // для каких файлов создаем 'picture'
    //     // source:['.avif', '.webp'],  // создаем 'source' с этими форматами      
    //     noPicture : ['no-picture'],   // если находим этот класс для тега 'img', то не создаем 'picture' (можно ставить несколько классов)
    //     noPictureDel : true // удалять классы прописанные в `noPicture`?
    //   }
    // ))
    // .pipe(formatHtml()) // "разжимаем" (форматируем)
    // END начали - добавляем <picture>
    .pipe(versionNumber({ // версия файлов
      'value': '%DT%',
      'append': {
        'key': '_v',
        'cover': 0,
        'to': [
          'css',
          // 'js',
        ]
      },
      'output': {
        'file': 'gulp/version.json'
      }
    }
    ))
    // .pipe(htmlmin())    
    .pipe(app.gulp.dest(app.path.build.html))    
    .pipe(app.plugins.browsersync.stream());
}
// Основные модули
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js"

// Передаем значения в глобальную переменную
global.app = {
  isBuid: process.argv.includes('--build'), // Режим продакшен
  isDev: !process.argv.includes('--build'), // Режим разработчика
  path: path,
  gulp: gulp,
  plugins: plugins,
}

// Импортируем задачи
import { copy, copyfonts, copyImg, copyImages, copySprite } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { sprite } from './gulp/tasks/sprite.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';

// Наблюдаем за изменениями в файлах
function watcher() {
  // путь к файлам , и действие которое выполняем
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, imagesCopy);
}

// parallel - паралельное выполнение задач
// series - последовательное выполнение задач

// Обработка изображений (результат в src/zpass/images/)
const imagesAll = gulp.series(images, images);

// Перенос изображений в dist/images
// const imagesCopy = gulp.series(copyImg, copySprite);
const imagesCopy = gulp.series(copyImages, copySprite);

// Шрифт - последовательная обработка
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи. (в доп. константе для сценариев mainTasks)
// const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
const mainTasks = gulp.parallel(copy, copyfonts, imagesCopy, html, scss, js);

// Строим сценарий по умолчанию
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
// const build = gulp.series(reset, mainTasks)
// const deployZIP = gulp.series(reset, mainTasks, zip)
// const deployFTP = gulp.series(reset, mainTasks, ftp)

const all = gulp.series(reset, sprite, images, fonts, dev)

// Экспорт сценариев
export { dev }
export { sprite }
export { images }
export { copySprite }
export { copyImg }
// export { otfToTtf }
// export { ttfToWoff }
// export { fontsStyle }
// export { build }
// export { deployZIP }
// export { deployFTP }
export { all }
export { fonts }
export { imagesAll }
export { imagesCopy }

// Выполнение сценария по умолчанию
gulp.task('default', dev);

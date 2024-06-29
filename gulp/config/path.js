// Импорт модуля path
import * as nodePath from 'path';
// Получаем имя папки проекта (gulp_22)
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //путь к папке с результатом (можно заменить на своё или на имя текущего проекта - rootFolder)
const srcFolder = `./src`; // путь к папке с исходниками
// объект path - информация о путях

global.pug = 'html';// 'html' или 'pug'

export const path = {//export - для использования в других файлах
  build: {  // Пути к результатам
    // ./dist/
    html: `${buildFolder}/`,
    // ./dist/js/         
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    svg: `${buildFolder}/images/svg/`,
    icons: `${buildFolder}/images/icons/`,
    zimages: `${srcFolder}/zpass/images/`,
    zmin: `${srcFolder}/zpass/minimages/`,
    fonts: `${buildFolder}/fonts/`,
    zfonts: `${srcFolder}/zpass/fonts/`,
    files: `${buildFolder}/files/`,
    svg_sprite: `${srcFolder}/zpass/images/`,
    svgicons: `${srcFolder}/zpass/svgicons/`,
  },
  src: {   // Пути к исходным файлам
    // Файл app.js с папки src/js/
    js: `${srcFolder}/js/app.js`,
    // Выбранные файлы с папки и подпапок ./src/images/
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    alimages: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif,svg}`,
    zmin: `${srcFolder}/zpass/minimages/**/*.{jpg,jpeg,png,gif}`,
    zimages: `${srcFolder}/zpass/images/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    zminimg: `${srcFolder}/zpass/minimages/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    // Файлы .svg с папки и подпапок ./src/images/svg/
    svg: `${srcFolder}/images/svg/**/*.svg`,
    // Файл style.scss с папки ./src/scss/
    scss: `${srcFolder}/scss/style.scss`,
    // Все файлы .html с папки ./src/
    html: `${srcFolder}/*.${pug}`,
    // Все файлы с папки и подпапок ./src/files/
    files: `${srcFolder}/files/**/*.*`,
    // Все файлы с папки ./src/fonts/
    fonts: `${srcFolder}/fonts/*.*`,
    // Все файлы с папки ./src/zpass/fonts/
    zfonts: `${srcFolder}/zpass/fonts/*.*`,
    // Файлы .svg с папки ./zpass/svgicons/icons/
    icons: `${srcFolder}/zpass/svgicons/icons/*.svg`,
    // Файлы .svg с папки ./src/images/svgicons/
    svgicons: `${srcFolder}/images/svgicons/*.svg`,
  },
  watch: {  // Пути к файлам за которыми следит gulp
    // Все файлы .html или .pug с папки и подпапок ./src/
    html: `${srcFolder}/**/*.${pug}`,
    // Все файлы с папки и подпапок ./src/files/
    files: `${srcFolder}/files/**/*.*`,
    js: `${srcFolder}/js/**/*.js`,
    // Все файлы .scss с папки и подпапок ./src/scss/
    scss: `${srcFolder}/scss/**/*.scss`,
    // Выбранные файлы с папки и подпапок ./src/images/
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif,svg,ico}`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `` // папка на удаленном ftp сервере 
}
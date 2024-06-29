// Импорт модуля path
import * as nodePath from 'path';
// Получаем имя папки проекта (wp_gulp)
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; //путь к папке с результатом (можно заменить на своё или на имя текущего проекта - rootFolder)
const srcFolder = `./src`; // путь к папке с исходниками

global.pug = 'html';// 'html' или 'pug'

// объект path - информация о путях
export const path = {//export - для использования в других файлах
  build: {  // Пути к результатам    
    html: `${buildFolder}/`,// ./dist/            
    js: `${buildFolder}/js/`,// ./dist/js/ 
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/images/`,
    svg: `${buildFolder}/images/svg/`,
    icons: `${buildFolder}/images/icons/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`,

    svg_sprite: `${srcFolder}/zpass/images/`,// ./src/zpass/images/
    svgicons: `${srcFolder}/zpass/svgicons/`,// ./src/zpass/svgicons/
    zimages: `${srcFolder}/zpass/images/`,
    zmin: `${srcFolder}/zpass/minimages/`,
    zfonts: `${srcFolder}/zpass/fonts/`,
  },
  src: {   // Пути к исходным файлам    
    js: `${srcFolder}/js/app.js`,// Файл app.js с папки src/js/
    // Выбранные файлы с папки и подпапок ./src/images/
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    alimages: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif,svg}`,
    zmin: `${srcFolder}/zpass/minimages/**/*.{jpg,jpeg,png,gif}`,
    zimages: `${srcFolder}/zpass/images/**/*.{jpg,jpeg,png,gif,webp,avif}`,
    zminimg: `${srcFolder}/zpass/minimages/**/*.{jpg,jpeg,png,gif,webp,avif}`,

    svg: `${srcFolder}/images/svg/**/*.svg`,// Файлы .svg с папки и подпапок ./src/images/svg/ 
    scss: `${srcFolder}/scss/style.scss`,// Файл style.scss с папки ./src/scss/ 
    html: `${srcFolder}/*.${pug}`,// Все файлы .html с папки ./src/ 
    files: `${srcFolder}/files/**/*.*`,// Все файлы с папки и подпапок ./src/files/ 
    fonts: `${srcFolder}/fonts/*.*`,// Все файлы с папки ./src/fonts/ 
    zfonts: `${srcFolder}/zpass/fonts/*.*`,// Все файлы с папки ./src/zpass/fonts/ 
    icons: `${srcFolder}/zpass/svgicons/icons/*.svg`,// Файлы .svg с папки ./zpass/svgicons/icons/ 
    svgicons: `${srcFolder}/images/svgicons/*.svg`,// Файлы .svg с папки ./src/images/svgicons/
  },
  watch: {  // Пути к файлам за которыми следит gulp    
    html: `${srcFolder}/**/*.${pug}`,// Все файлы .html или .pug с папки и подпапок ./src/    
    files: `${srcFolder}/files/**/*.*`,// Все файлы с папки и подпапок ./src/files/
    js: `${srcFolder}/js/**/*.js`,// Все файлы .js с папки и подпапок ./src/js/   
    scss: `${srcFolder}/scss/**/*.scss`,// Все файлы .scss с папки и подпапок ./src/scss/    
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,avif,svg,ico}`,// Выбранные файлы с папки и подпапок ./src/images/
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `` // папка на удаленном ftp сервере 
}
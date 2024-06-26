## ОСНОВНЫЕ КОМАНДЫ

### Запуск в режиме разработчика :
`npm run dev` или `gulp`
- создание спрайта, обработка изображений и шрифтов здесь не запускается, а только переносится готовый резутьтат.. 

### КОМАНДЫ ЗАПУСКАЕМЫЕ ОТДЕЛЬНО

`npm run imagesAll` - обработка изображений
- результат в src/zpass/img/

`npm run sprite` - создание SVG спрайта
- исходники в src/img/svgicons/
- результат в src/zpass/svgicons/

`npm run fonts` - шрифты
- перед запуском _удалить_ `src/scss/fonts.scss`
- исходники в src/fonst
- результат в src/zpass/fonts

## СОЗДАНИЕ НОВОГО ПРОЕКТА ( перенос )

### Забираем папки и файлы в новую папку:
- gulp
- src
- gulpfile.js
- package.json
- README.md
### Запуск в новой папке команда:
- npm i
    
## СТРУКТУРА ПРОЭКТА

```
# Папка проекта
│
├── dist                          # папка ПРОЕКТа - создается автоматически как и все её вложения
│   ├── css                       # папка стилей
│   │   ├── style.css             # не сжатый файл стилей
│   │   └── style.min.css         # сжатый файл стилей
│   ├── files                     # папка с разными файлами
│   ├── fonts                     # папка со шрифтами
│   ├── img                       # папка с изображениями
│   │   └── icons                 # папка со спрайтом
│   │      └── icons.svg          # спрайт
│   ├── js                        # папка для JS файлов
│   │   └── app.min.js            # сжатый файл
│   └──  index.html               # HTML файл
│
├── node_modules                  # "системная"
│
├── gulp                          # папка с вспомогательными файлами
│   ├── config                    # папка с настройками
│   │   ├── ftp.js                # настройки выгрузки на сервер
│   │   ├── path.js               # файл с путями
│   │   └── plugins.js            # oбщие плагины используемые в сценариях              
│   ├── tasks                     # Папка для задач
│   │   ├── copy.js               # Копирование файлов
│   │   ├── fots.js               # для шрифтов
│   │   ├── html.js               # - HTML
│   │   ├── images.js             # - img
│   │   ├── js.js                 # - JS
│   │   ├── reset.js              # удаление
│   │   ├── scss.js               # - SCSS
│   │   ├── server.js             # сервер
│   │   └── sprite.js             # создание спрайта с .svg файлов
│   └──version.json               # версия файлов (создается автоматически в html.js)
│
├── src                           # ИСХОДНИКИ
│   ├── files                     # Файлы не требующие обработки - переносятся как есть
│   ├── fonts                     # Шрифты - исходники
│   ├── html                      # - HTML компоненты
│   │   └── pug                   # - - PUG компоненты (при использовании PUG)
│   ├── img                       # - Изображения
│   │   └── svg_sprite            # - - .svg - исходники для спрайта
│   ├── js                        # Скрипты
│   │   ├── components            # - подключаемые компоненты (слайдер и т.п.)
│   │   ├── modules               # - подключаемые модули
│   │   │   └── functions.js      # -- основные функции (настройки слайдеров и т.п.)
│   │   └── app.js                # - главный скрипт - подключение всех скриптов
│   ├── scss                      # Стили сайта ( в scss-синтаксисе )
│   │   ├── fonts.scss            # - подключение шрифтов - создается автоматически
│   │   └── style.scss            # - главный файл стилей
│   ├── zpass                     # Ресурсы (все создаются автоматически) не требующие частого обновления
│   │   ├── fonts                 # - шрифты, переносится в `dist/`
│   │   ├── img                   # - изображения .avif, .webp - переносятся в `dist/img`
│   │   ├── minimg                # - оптимизированные изображения - переносятся в `dist/img`
│   │   └── sprite                # - спрайт и инструкця
│   │       ├── icons             # -- спрайт
│   │       └── stack             # -- инструкця
│   ├── index.html                # Главный html-файл
│   └── index.pug                 # Главный pug-файл
│
├── gulpfile.js                   # файл с настройками Gulp
├── package-lock.json             # "системный"
├── package.json                  # файл с настройками сборки и установленными пакетами
└── README.md                     # документация сборки
```
## УСТАНОВКА С НУЛЯ

### Настройка политики запуска скриптов (Execution Policy) PowerShell
- заходим в `PowerShell`
- проверяем политику запуска скриптов командой `Get-ExecutionPolicy`
- если политика отличается от `RemoteSigned`, то вводим команду:
`Set-ExecutionPolicy RemoteSigned –Force`
- проверяем - `Get-ExecutionPolicy`. Политика должна измениться на `RemoteSigned`

### Проверка глобальных установок программ
- `node -v`
- `npm -v`
- если нет, то устанавливаем LTS версию: [https://nodejs.org/](https://nodejs.org/)

- `gulp -v`
- если нет, то устанавливаем глобально `npm i gulp-cli -g`

### Обновление

- node и npm
- Скачиваем и устанавливаем LTS версию: [https://nodejs.org/](https://nodejs.org/) 

- gulp
- `npm rm --global gulp`   - удаляем глобально
- `npm i gulp-cli -g`   - устанавливаем глобально

### Инициализация среды
- `npm init`
- В _package.json_ прописываем:

```
  "main": "gulpfile.js",
  "type": "module",

```
### Установка плагинов ( npm i -D < название >)
- gulp                     // Галп
- del                      // для удаления/очистки
- gulp-file-include        // для разбиения HTML на компоненты
- gulp-replace             // Поиск и замена
- (gulp-webp-html-nosvg    // Контейнер _picture_ для .webp формата картинок - gulp-picture-html - лучше :))
- gulp-picture-html        // Контейнер _picture_ для .webp и .avif формата картинок
- gulp-version-number      // Динамическая версия файла
- gulp-plumber             // Обработка ошибок
- gulp-notify              // Сообщения-подсказки
- browser-sync             // Локальный сервер

### Преключение на использование .pug (если будем использовать)
- в файле _/config/path.js_ в переменной `global.pug = 'html';` меняем `html` на `pug`  
- создаем соответствующие файлы _*.pug_  
- npm i -D gulp-pug              // установка Pug

- sass                           // Препроцесор SASS 
- gulp-sass                      // и установщик его (SASS) в Gulp
- gulp-rename                    // Переименование файлов
- gulp-clean-css                 // Сжатие CSS файла
- gulp-webpcss                   // Вывод WEBP изображений
- webp-converter@2.2.3           // Конвертер в WEBP (версия `@2.2.3` для свазки с `gulp-webpcss`)
- gulp-autoprefixer              // Добавление вендорных префиксов
- gulp-group-css-media-queries   // Группировка медиа запросов
- webpack webpack-stream         // Webpack и модуль webpack-stream
- gulp-webp                      // Преобразование изображений в формат .webp
- gulp-avif                      // Преобразование изображений в формат .avif
- gulp-imagemin                  // Сжатие изображений
- gulp-newer                     // Проверка наличия обновления
- gulp-fonter gulp-ttf2woff2     // Преобразование шрифтов
- gulp-svg-sprite                // Создание SVG спрайта
- gulp-if                        // Условное ветвление
- gulp-htmlmin                   // Сжатие HTML и др.

### Шрифты
- Для обновления файла подключения шрифта
  `src/scss/fonts.scss` нужно его _удалить_!
- Файлы шрифтов разместить в папке ` src/fonst `  
- _Не входит_ в общий сценарий и создается отдельно запуском команды:
  `npm run fonts`
- преобразованные файлы находится в папке `src/zpass/fonts`
- при запуске сборки папка `fonts` переносится в папку `dist/` 

### Плагин для VS Code
- Path Autocomplete - устанавливаем (в VS Code)
- `F1` ищем `Open Settings (JSON)`
(пользавательские настройки - settings.json)
- прописываем:
```
"path-autocomplete.pathMappings": {
"@img": "${folder}/src/img", // alias for images
"@scss": "${folder}/src/scss", // alias for scss
"@js": "${folder}/src/js", // alias for js
},
```
- теперь например `@img` будет заменяться на `./src/img`
 
### Оптимизация и создание изображений в .avif, .webp
- подключаем плагины `gulp-webp`, `gulp-avif`, `gulp-imagemin` в файле `tasks\images.js`
- изображения ложим в папку `src/img/`
- команда:
- `npm run imagesAll`
- оптимизированные изображения в папке `src/zpass/minimg/`
- обработанные изображения `.avif, .webp` в папке `src/zpass/img/`

### Перенос изображений в `dist/img/`
- включает в себя обработку изображений (`imagesAll`) и
- перенос из папок `src/zpass/img/`, `src/zpass/minimg/` и `src/zpass/sprite/`
- команда:
- `npm run imagesCopy`  

### Создание SVG спрайта 
- `.svg` файлы для спрайта разместить в папке ` src/img/svgicons/ `  
- _Не входит_ в общий сценарий и создается отдельно запуском команды:
  `npm run sprite`
- созданный спрайт находится в папке `/zpass/svgicons/icons`
- инструкция по использованию - в папке `/zpass/svgicons/stack`
- при запуске сборки спрайт переносится в папку `dist/img/icons`
- только перенос спрайта в `dist/img/icons`: 
  `npm run copySprite`

### Создание <picture> для подключение изображений  .avif, .webp 
- см. плагины и настройки в файле `html.js`
- путь к изображениям `@img/`

### Подключение дополнений
- swiper // Слайдер Swiper https://swiperjs.com/get-started

### Запуск - команда:

#### режимы без создания спрайта и конвертации шрифтов
- `npm run dev` или `gulp` - режим разработчика (по умолчанию)
- папки с шрифтом ./src/fonts/ и спрайтом ./src/img/icons/ (если они есть)
- преносятся в ./dist/

#### режимы создания спрайта и конвертации шрифтов
- `npm run sprite` - создание спрайта из SVG
- `npm run fonts` - конвертация шрифтов в формат woff и woff2
- `npm run all` - создание спрайта + конвертация шрифтов + режим разработчика 
- `npm run imagesAll` - обработка изображений (результат в src/zpass/img/)

#### Режим сдачи заказа (продакшен) для лендинга (максимальное сжатие всех файлов)
- `npm run buildZ` - режим продакшен
- `npm run zipZ` - создание ZIP архива
- `npm run deployZ` - отправка проекта по FTP на сервер
#### Режим сдачи заказа (продакшен) для бэкенда (два варианта файлов сжатый и не сжатый)
- `npm run buildB` - режим продакшен
- `npm run zipB` - создание ZIP архива 
- `npm run deployB` - отправка проекта по FTP на сервер
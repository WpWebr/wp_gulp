// import Swiper from "swiper"

// NEV
// import { calcWin } from './variable.js';
// import { argWin } from './variable.js';
// import { topScroll } from './variable.js';

// https://personavera.rufri.ru/
// Меню бургер
export function menuHeaderNev() {

  const iconMenu = document.querySelector('.menu__icons');

  // // Вычисление ширины боковой прокрутки (обычно 17px)
  // let scrolWidth = window.innerWidth - document.documentElement.clientWidth;
  // window.addEventListener("resize", function () { //пересчет при изменении ширины окна
  //   scrolWidth = window.innerWidth - document.documentElement.clientWidth;
  // }, false);
  // // End / Вычисление ширины боковой прокрутки

  if (iconMenu) {

    const menuItemHasChildren = document.querySelectorAll('.menu-item-has-children');

    iconMenu.addEventListener("click", function () {
      if (document.body.classList.contains('active')) {
        document.body.classList.remove('active');
        removeAll();
      } else {
        document.body.classList.add('active');
      }

      if (menuItemHasChildren.length > 0) {
        menuItemHasChildren.forEach(menuLink => {
          // menuLink.preventDefault();
          menuLink.addEventListener("click", ofMenuChildren);
        });
      }

      function removeAll() {
        if (menuItemHasChildren.length > 0) {
          menuItemHasChildren.forEach(menuLink => {
            if (menuLink.classList.contains('active')) {
              menuLink.classList.remove('active');
            }
          });
        }
      }


      function ofMenuChildren(e) {
        // e.preventDefault();
        const subMenu = this.querySelector('.sub-menu');
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          this.classList.add('active');
        }
      }

      // e.preventDefault();
      // if (document.body.classList.contains('active')) {
      //   document.body.classList.remove('lock')
      //   document.body.classList.remove('active');
      // }

    });

  }

}
// Для высоты экрана в мобилках и ширины прокрутки
export function vhVw() {
  // body {
  //   min-height: 100vh;
  //   min-height: calc(var(--vh, 1vh) * 100);
  //   /* остальные стили  */
  // }
  let s = 1;
  let h = 1;

  vhWin();

  function vhWin() {
    // 1/100 высоты окна
    let vh = Math.min(
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight,
      window.innerHeight
    ) / 100;

    // Ширина прокрутки
    // function sw() {
    //   // var documentWidth = parseInt(document.documentElement.clientWidth);
    //   // var windowsWidth = parseInt(window.innerWidth);
    //   // var scrollbarWidth = windowsWidth - documentWidth;
    //   // return scrollbarWidth;
    // }

    let sw = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);
    if (sw != s) {
      s = sw;
      // добавляем в тег html пременную
      document.documentElement.style.setProperty('--sw', `${s}px`);
    }
    if (vh != h) {
      h = vh;
      // добавляем в тег html пременную
      document.documentElement.style.setProperty('--vh', `${h}px`);
    }

  }
  window.onresize = vhWin; // пересчитываем при изменении размера окна
}
// Настройка слайдеров
export function slickSetings() {

  // включение / отключение слайдера '.slider-h1'
  let sliderOn = false;
  addSlick();
  window.addEventListener("resize", addSlick, false);
  function addSlick() {
    if (window.innerWidth <= 768) {
      if (!sliderOn) {
        sliderOn = true;
        $('.slider-h1').slick({
          arrows: false,
          // fade: true,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          touchThreshold: 10,
        });
      }
    } else {
      if (sliderOn) {
        $('.slider-h1').slick('unslick');
        sliderOn = false;
      }
    }
  }
  // END - включение / отключение слайдера '.slider-h1'

  // включение / отключение слайдера '.notes__list'
  // let sliderOn2 = false;

  // if (window.innerWidth <= 960) {
  //   sliderOn2 = true;
  //   $('.notes__list').slick({
  //     arrows: false,
  //     fade: true,
  //     autoplay: true,
  //     slidesToShow: 2,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 425,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         }
  //       }
  //     ]
  //   });
  // }

  // window.addEventListener("resize", addSlick2, false);

  // function addSlick2() {
  //   if (window.innerWidth <= 960) {
  //     if (!sliderOn2) {
  //       sliderOn2 = true;
  //       $('.notes__list').slick({
  //         arrows: false,
  //         fade: true,
  //         autoplay: true,
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         responsive: [
  //           {
  //             breakpoint: 425,
  //             settings: {
  //               slidesToShow: 1,
  //               slidesToScroll: 1,
  //             }
  //           }
  //         ]
  //       });
  //     }
  //   }
  //   else {
  //     if (sliderOn2) {
  //       $('.notes__list').slick('unslick');
  //       sliderOn2 = false;
  //     }
  //   }
  // }
  // END - включение / отключение слайдера '.notes__list'



  // Home
  // $('.slider-h1').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   // speed: 300,
  //   // autoplay: true,
  //   // autoplaySpeed: 2000,
  //   // centerMode: true,
  //   // variableWidth: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         // arrows: false,
  //         centerMode: true,
  //         // centerPadding: '20px',
  //         autoplay: true,
  //         speed: 900,
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         // centerMode: true,
  //         // centerPadding: '20px',
  //         autoplay: true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       }
  //     }
  //   ]
  // });

  $('.slider-s7').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2500, // скорость анимации
    pauseOnFocus: false,// остановка анимации при фокусе
    pauseOnHover: false,// -.- при наведении
    // pauseOnDotHover: false,// -.- на точки
    touchThreshold: 10,
  });

  $('.b6__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // fade: true,
    // variableWidth: true,
    // centerPadding: '200px',
    // autoplaySpeed: 2500, // скорость анимации
    pauseOnFocus: false,// остановка анимации при фокусе
    pauseOnHover: false,// -.- при наведении
    // pauseOnDotHover: false,// -.- на точки
    touchThreshold: 10, // когда перелистывать (5)

  });

  $('.b11__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // fade: true,
    // variableWidth: true,
    // centerPadding: '200px',
    // autoplaySpeed: 2500, // скорость анимации
    pauseOnFocus: false,// остановка анимации при фокусе
    pauseOnHover: false,// -.- при наведении
    // pauseOnDotHover: false,// -.- на точки
    touchThreshold: 10,

  });




  $('.s9__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,// стрелки
    // speed: 300,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 4500,
    touchThreshold: 10,
    // centerMode: true, // главный слайд по центру
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 961,
        settings: {
          adaptiveHeight: true,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     arrows: false,
      //     // centerMode: true,
      //     // centerPadding: '20px',
      //     autoplay: true,
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // }
    ]
  });


  // f- для смены доп. фото в .s9
  function bfAfSlid(el, currentSlide) {
    if (el) {
      const clImage = el.clone(); // копируем фото
      let aSl = currentSlide + 1; // номер следущего фото
      let bSl = currentSlide - 1; // -- предыдущего фото
      if (currentSlide == 0) {
        bSl = clImage.length - 1;
      }
      if (currentSlide == clImage.length - 1) {
        aSl = 0;
      }
      $('#image-af img').replaceWith(clImage[aSl]);
      $('#image-bf img').replaceWith(clImage[bSl]);
    }
  }
  bfAfSlid($('.s9__slider img'), 0);
  // События слайдера (.s9)
  // - перед сменой слайда
  $('.s9__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    bfAfSlid($('.s9__slider img'), nextSlide);
  });

  $('.sc3__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    touchThreshold: 10,
    pauseOnFocus: false,// остановка анимации при фокусе
    pauseOnHover: false,// -.- при наведении
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  });

  // $('.sl-brend').slick({
  $('.scaling-sl').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    touchThreshold: 10,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

  });
}
// Video - принудительный запуск
export function videoPlay() {
  const videoAll = document.querySelectorAll('video');
  if (videoAll.length > 0) {
    videoAll.forEach(e => {
      let playPromise = e.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
          .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
          });
      }
    });
  }
}
// прокрутка к якорю, склол ... 
export function scrollTo() {
  // html: //
  // <nav class="scrollto">
  //     <ul>
  //         <li><a href="#element1">Ссылка-1</a></li>
  //         <li><a href="#element2">Ссылка-2</a></li>
  //         <li><a href="#element3">Ссылка-3</a></li>
  //     </ul>
  // </nav>
  // <section id="element1">Секция-1</section>
  // <section id="element2">Секция-2</section>
  // <section id="element3">Секция-3</section> 
  const linckHrefAll = document.querySelectorAll('.site-main a[href^="#"');

  let topScrol = window.scrollY;// скрол

  const b10 = document.querySelector('.b10');// блок с фоном в позиции Фиксет
  const b16 = document.querySelector('.b16');// блок с фоном в позиции Фиксет
  const staticAll = document.querySelectorAll('.static'); // блоки с фоном в позиции Фиксет

  // let staticHeight; // высота b10
  // let staticHeightB16; // высота b16
  // staticHeight = elementHeight(b10);
  // staticHeightB16 = elementHeight(b16);


  // if (b10) {
  //   staticHeight = b10.offsetHeight;// высота b10

  // window.addEventListener('resize', event => {
  //   staticHeight = b10.offsetHeight;// высота b10
  // }, false);
  // staticHeight = b10.offsetHeight;// высота b10
  // }


  const scrollUp = document.getElementById('top');// стрелка вверх

  const offset = 300; // появление когда проскролено offset px
  if (scrollUp || staticAll.length > 0) {
    // событие скрола
    window.addEventListener('scroll', () => {
      topScrol = window.scrollY;
      if (scrollUp) {
        addActive(topScrol, scrollUp, offset);
      }

      if (staticAll.length > 0) {
        staticAll.forEach(el => {
          addActive(topScrol, el, offsetPosition(el)[1] - elementHeight(el));
        });
      }
      // if (b10) {
      //   addActive(topScrol, b10, offsetPosition(b10)[1] - elementHeight(b10));
      // }
      // if (b16) {
      //   addActive(topScrol, b16, offsetPosition(b16)[1] - elementHeight(b16));
      // }

    });
  }

  // вычисление высоты элемента
  function elementHeight(el) {
    if (el) {
      return el.offsetHeight;
    }
  }

  // добавить сласс .active
  function addActive(topScrol, el, hTop = 0) {
    if (topScrol > hTop) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  // растояние до элемента
  function offsetPosition(element) {
    let offsetLeft = 0, offsetTop = 0;
    do {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;
    } while (element = element.offsetParent);
    return [offsetLeft, offsetTop];
  }

  if (linckHrefAll.length > 0) {
    linckHrefAll.forEach(link => {

      link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const siteHeader = document.querySelector('.site-header');// шапка
        let topOffset = 0; // отступ сверху
        let noTopOffset = 0; // если не нужен отступ сверху то = 0
        if (siteHeader && noTopOffset) {
          topOffset = siteHeader.offsetHeight;// высота шапки
        }

        if (scrollTarget) {

          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }



      });
    });
  }


}
// Accordion
export function AccodionVer() {
  class ItcAccordion {
    constructor(target, config) {
      this._el = typeof target === 'string' ? document.querySelector(target) : target;
      const defaultConfig = {
        alwaysOpen: true,
        duration: 350
      };
      this._config = Object.assign(defaultConfig, config);
      this.addEventListener();
    }
    addEventListener() {
      this._el.addEventListener('click', (e) => {
        const elHeader = e.target.closest('.accordion__header');
        if (!elHeader) {
          return;
        }
        if (!this._config.alwaysOpen) {
          const elOpenItem = this._el.querySelector('.accordion__item_show');
          if (elOpenItem) {
            elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
          }
        }
        this.toggle(elHeader.parentElement);
      });
    }
    show(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['display'] = 'block';
      const height = elBody.offsetHeight;
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.add('collapsing');
      el.classList.add('accordion__item_slidedown');
      elBody.offsetHeight;
      elBody.style['height'] = `${height}px`;
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        el.classList.remove('accordion__item_slidedown');
        elBody.classList.add('collapse');
        el.classList.add('accordion__item_show');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    hide(el) {
      const elBody = el.querySelector('.accordion__body');
      if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
        return;
      }
      elBody.style['height'] = `${elBody.offsetHeight}px`;
      elBody.offsetHeight;
      elBody.style['display'] = 'block';
      elBody.style['height'] = 0;
      elBody.style['overflow'] = 'hidden';
      elBody.style['transition'] = `height ${this._config.duration}ms ease`;
      elBody.classList.remove('collapse');
      el.classList.remove('accordion__item_show');
      elBody.classList.add('collapsing');
      window.setTimeout(() => {
        elBody.classList.remove('collapsing');
        elBody.classList.add('collapse');
        elBody.style['display'] = '';
        elBody.style['height'] = '';
        elBody.style['transition'] = '';
        elBody.style['overflow'] = '';
      }, this._config.duration);
    }
    toggle(el) {
      el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
    }
  }

  // Инициализация если несколько аккордионов
  const Accordions = document.querySelectorAll('.accordion');
  if (Accordions.length > 0) {
    Accordions.forEach(Accordion => {
      new ItcAccordion(Accordion, {
        alwaysOpen: false
      });
    });
  }
  // Если только один аккордион
  // new ItcAccordion(document.querySelector('.accordion'), {
  //   alwaysOpen: false
  // });
}
// Анимация
export function muAnime() {

  // const animItems = document.querySelectorAll('.anime');
  // const accordionItems = document.querySelectorAll('.a3__accordion');

  scrollRun('.anime', 0.5);
  scrollRun('.a3__accordion', 4, 1); // селектор, коофициент старта анимации ( 4 - 1/4 высоты объекта анимации ), 1 - проверить наличие аккардиона

  let i = 0;

  function scrollRun(items, k = 1, accordion = false) {

    const animItems = document.querySelectorAll(items);

    if (animItems.length > 0) {

      // k - коофициент старта анимации

      setTimeout(run, 300); // задержка        


      if (accordion) {
        accordionList();
      }


      window.addEventListener('scroll', run);

      function run() {
        animOnScroll(animItems, k);
      }

    }

  }



  function animOnScroll(animItems, animStart = 1) {

    // window.scrollY == window.pageYOffset; // pageYOffset - устарело
    let prevScroll = window.scrollY // высота прокрутки в пикселях

    animItems.forEach(el => {

      const animItemHeight = el.offsetHeight; // высота объекта
      const animItemOffset = offset(el).top; // растояние объекта от верха
      let animItemPoint = ''; // момент старта

      if (animItemHeight > window.innerHeight) { // высота объекта > высоты окна
        animItemPoint = animItemHeight - window.innerHeight / animStart;
      } else {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if ((prevScroll > animItemOffset - animItemPoint) && prevScroll < (animItemOffset + animItemHeight)) {
        el.classList.add('norm');
      } else {
        if (!el.classList.contains('anim-on')) {
          el.classList.remove('norm');
        }
      }

    });

  }


  // Листание аккардиона
  function accordionList() {

    const items = document.querySelectorAll('.a3__item');

    if (items.length > 0) {
      setInterval(addAcClass, 6000);
    }
    let k = 1;

    function addAcClass() {

      let p = 0;

      for (let i = 0; i < items.length; i++) {

        const item = items[i];

        if (item.classList.contains('accordion__item_show') && p == 0) {
          // item.classList.remove('accordion__item_show');          
          // items[k].classList.add('accordion__item_show');
          items[k].querySelector('.accordion__header').click();
          p++;
        }

        k++;
        if (k == items.length) {
          k = 0;
        }
      }
    }
  }

  // положение объекта относительно страницы
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
}
// Базовое модальное окно Qj (modal-qj.html, _modal-qj.scss )
export function qjItcModal() {

  $(document).on('click', '[data-toggle="modal"]',

    function () {
      let target = $(this).attr('data-target');
      if ($(target).length) {
        $(target).addClass('show');
        $('body').addClass('losk');
      }

      return false;
    }
  );







  // // modal-form
  // const modalCookies = document.getElementById('modal-form');
  // if (modalCookies && getCookie('modalform') == undefined) {
  //   setTimeout(onModal, 1000);
  // }

  // function onModal() {
  //   modalCookies.classList.add('show');
  //   $('body').addClass('losk');
  //   setCookie('modalform', 'ok', { path: '/', secure: true, 'max-age': 900 }); // 900 - секунд или 15 минут
  // }

  // // Работа с куками
  // // проверка наличия куков на сайте
  //   // alert(document.cookie);
  // // получение кука по имени
  // function getCookie(name) {
  //   let matches = document.cookie.match(new RegExp(
  //     "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  //   ));
  //   return matches ? decodeURIComponent(matches[1]) : undefined;
  // }
  // // установка кука
  // function setCookie(name, value, options = {}) {
  //   if (options.expires instanceof Date) {
  //     options.expires = options.expires.toUTCString();
  //   }

  //   let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  //   for (let optionKey in options) {
  //     updatedCookie += "; " + optionKey;
  //     let optionValue = options[optionKey];
  //     if (optionValue !== true) {
  //       updatedCookie += "=" + optionValue;
  //     }
  //   }

  //   document.cookie = updatedCookie;
  // }
  // // сброс кука
  // deleteCookie('modalform');
  // function deleteCookie(name) {
  //   setCookie(name, "", {
  //     'max-age': -1
  //   })
  // }
  // //END modal-form








  // Клик по кнопке 'Закрыть'
  $('.modal .close').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    $('body').removeClass('losk');
    return false;
  })


  // Клик по фону, но не по окну.
  $('.modal').click(function (e) {
    if ($(e.target).closest('.modal__dialog').length == 0) {
      // $(this).fadeOut();	
      $(this).closest('.modal').removeClass('show');
      $('body').removeClass('losk');
    }
    return false;
  });

  // Закрытие по клавише Esc.
  // $(document).keydown(function (e) {
  //   if (e.keyCode === 27) {
  //     e.stopPropagation();
  //     // $('.popup-fade').fadeOut();
  //     $('.modal').removeClass('show');
  //     $('body').removeClass('losk');
  //   }
  // });



}
// Модальное окно для cookies
export function modCookies() {
  const modalCookies = document.getElementById('modal-cookies');
  const closeCookies = document.getElementById('modal-cookies-close');
  const closeButton = document.getElementById('modal-cookies-button');

  if (getCookie('accept') == undefined) {
    setTimeout(onModal, 1000);
  }


  function onModal() {
    modalCookies.classList.add('active');
    // modalCookies.style.display = 'block';
    if (closeCookies && closeButton) {
      closeCookies.addEventListener("click", ofModal);
      closeButton.addEventListener("click", addOfModal);
    }
  }

  function addOfModal() {
    setCookie('accept', 'ok', { path: '/', secure: true, 'max-age': 2592000 }); // 2592000 - 30 дней в секундах
    ofModal();
  }

  function ofModal() {
    modalCookies.classList.remove('active');
    // setTimeout(dNone, 2500);
    // function dNone() {
    //   modalCookies.style.display = 'none';
    // }
  }

  // Работа с куками
  // проверка наличия куков на сайте
  // alert( document.cookie );
  // получение кука по имени
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  // установка кука
  function setCookie(name, value, options = {}) {
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }
  // сброс кука
  function deleteCookie(name) {
    setCookie(name, "", {
      'max-age': -1
    })
  }

}
// // Модальное окно для modal-form
// export function modForm() {
//   const modalCookies = document.getElementById('modal-form');
//   const closeCookies = document.getElementById('modal-form-close');
//   if (modalCookies) {
//     setTimeout(onModal, 1000);
//   }


//   function onModal() {
//     modalCookies.classList.add('active');
//     // modalCookies.style.display = 'block';


//     if (closeCookies) {
//       console.log(closeCookies);
//       closeCookies.addEventListener("click", ofModal);
//     }
//   }

//   function ofModal() {
//     modalCookies.classList.remove('active');
//     // setTimeout(dNone, 2500);
//     // function dNone() {
//     //   modalCookies.style.display = 'none';
//     // }
//   }

// }

// END https://personavera.rufri.ru/



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// прокрутка к якорю, склол ... --не работает---
export function scrollToTop() {
  // html: //
  // <nav class="scrollto">
  //     <ul>
  //         <li><a href="#element1">Ссылка-1</a></li>
  //         <li><a href="#element2">Ссылка-2</a></li>
  //         <li><a href="#element3">Ссылка-3</a></li>
  //     </ul>
  // </nav>
  // <section id="element1">Секция-1</section>
  // <section id="element2">Секция-2</section>
  // <section id="element3">Секция-3</section> 
  const linckHrefAll = document.querySelectorAll('.site-main a[href^="#"');
  const scrollUp = document.getElementById('top');// стрелка вверх
  const b10 = document.querySelector('.b10'); // блок с фоном в позиции Фиксет
  const staticAll = document.querySelectorAll('.static'); // блоки с фоном в позиции Фиксет
  console.log(staticAll);

  // высота блока
  function eltHeight(elt) {
    let staticHeight;
    if (elt) {
      staticHeight = b10.offsetHeight;// высота b10
    }
    return staticHeight;
  }
  let staticHeight; // высота b10
  if (staticAll.length > 0) {
    staticHeight = b10.offsetHeight;// высота b10

    window.addEventListener('resize', event => {
      staticHeight = b10.offsetHeight;// высота b10
      console.log(staticHeight);
    }, false);

  }



  let topScrol = window.scrollY;// скрол
  const offset = 300; // появление когда проскролено offset px

  scrollAdd();
  // f событие скрола
  // [элемент[растояние до верха страницы, элемент, присвоить когда проскроленно от верха (px)]]
  // els[topEl, elem, topActive]
  function scrollAdd(els) {
    // if (els.length > 0) {

    //   els.forEach(el => {
    //     addActive(el[0] ? el[0] : false, el[1] ? el[1] : false, el[2] ? el[2] : false);
    //   });


    // }

    if (scrollUp || b10) {
      // событие скрола
      window.addEventListener('scroll', () => {
        topScrol = window.scrollY;

        if (scrollUp) {
          addActive(topScrol, scrollUp, offset);
        }
        if (b10) {
          addActive(topScrol, b10, offsetPosition(b10)[1] - staticHeight);
        }


      });
    }
  }



  // добавить сласс .active
  // растояние до верха страницы, элемент, присвоить когда проскроленно от верха (px)
  function addActive(topScrol, el, hTop = 0) {
    if (topScrol > hTop) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  }

  // растояние до элемента
  function offsetPosition(element) {
    let offsetLeft = 0, offsetTop = 0;
    do {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;
    } while (element = element.offsetParent);
    return [offsetLeft, offsetTop];
  }

  if (linckHrefAll.length > 0) {
    linckHrefAll.forEach(link => {

      link.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const siteHeader = document.querySelector('.site-header');// шапка
        let topOffset = 0; // отступ сверху
        let noTopOffset = 0; // если не нужен отступ сверху то = 0
        if (siteHeader && noTopOffset) {
          topOffset = siteHeader.offsetHeight;// высота шапки
        }

        if (scrollTarget) {

          const elementPosition = scrollTarget.getBoundingClientRect().top;
          const offsetPosition = elementPosition - topOffset;

          window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }



      });
    });
  }


}
// Прокрутка + анимация ----
export function scrollAnime() {

  const anime = document.querySelectorAll('.anime');

  if (anime.length > 0) {

    const topEls = []; // растояние от верха страницы до элементов
    const heightWindow = window.innerHeight / 4; // половина высоты экрана
    let scrollTop; // высота скрола

    for (let i = 0; i < anime.length; i++) {
      const el = anime[i];
      const elOffset = offset(el).top;// растояние от верха страницы до элемента
      topEls[i] = elOffset;
    }

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
      scrollTop = window.scrollY; // высота скрола

      for (let i = 0; i < topEls.length; i++) {
        const elTop = topEls[i];
        const el = anime[i];

        if (elTop > scrollTop + heightWindow) {
          el.classList.add('norm');
        } else {
          if (!el.classList.contains('anim-on')) {
            el.classList.remove('norm');
          }
        }
      }
    }

    // положение объекта относительно страницы
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

  }
}
// Для высоты экрана в мобилках
export function vhHeight() {
  // body {
  //   min-height: 100vh;
  //   min-height: calc(var(--vh, 1vh) * 100);
  //   /* остальные стили  */
  // }
  vhWin();
  function vhWin() {
    // const vh = window.innerHeight / 100;// 1/100 высоты в пикселях
    // const vh = document.documentElement.clientHeight/100;// 1/100 высоты в пикселях

    // let vh = Math.min(
    //   document.body.scrollHeight, document.documentElement.scrollHeight,
    //   document.body.offsetHeight, document.documentElement.offsetHeight,
    //   document.body.clientHeight, document.documentElement.clientHeight,
    //   window.innerHeight 
    // )/100;

    let vh = Math.min(
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight,
      window.innerHeight
    ) / 100;

    // console.log(document.documentElement.clientHeight);
    // console.log(vh);

    document.documentElement.style.setProperty('--vh', `${vh}px`);// добавляем в тег html пременную
  }
  window.onresize = vhWin; // пересчитываем при изменении размера окна
}
// export function scrollAnime() {

//   const anime = document.querySelectorAll('.anime');

//   if (anime.length > 0) {

//     window.addEventListener('scroll', animOnScroll);

//     setTimeout(() => {
//       animOnScroll();
//     }, 300);


//     function animOnScroll() {
//       for (let i = 0; i < anime.length; i++) {
//         const el = anime[i];

//         const elHeight = el.offsetHeight;// высота элемента
//         const elOffset = offset(el).top;// растояние от верха страницы до элемента
//         const animStart = 4;

//         // момент старта
//         let elPoint = window.innerHeight - (elHeight / animStart);

//         // console.log(window.innerHeight);
//         // console.log(elPoint);
//         // если высота объекта выще окна браузера
//         if (elHeight > window.innerHeight) {
//           elPoint = window.innerHeight - (window.innerHeight / animStart);
//         }

//         if (((pageYOffset) > elOffset - elPoint) && ((pageYOffset) > elOffset + elHeight)) {
//           el.classList.add('norm');
//         } else {
//           if (!el.classList.contains('anim-on')) {
//             el.classList.remove('norm');
//           }
//         }
//       }
//     }
//     // положение объекта относительно страницы
//     function offset(el) {
//       const rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//     }

//   }

// }




// Карта 
export function customMap2023() {
  // Initialize and add the map
  let map;

  async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Uluru",
    });
  }

  initMap();
}
// Модальное окно для события отправки формы (wpcf7)
export function submitForm() {
  const wpcf7Forms = document.querySelectorAll('.wpcf7');
  const modalForm = document.getElementById('modal-form');
  const closeModals = document.querySelectorAll('.close');
  if (wpcf7Forms.length > 0) {
    wpcf7Forms.forEach((el) => {
      el.addEventListener('wpcf7mailsent', function () {
        modalForm.classList.add('active');
        modalForm.style.display = 'block';

        if (closeModals.length > 0) {
          closeModals.forEach((el) => {
            el.addEventListener("click", ofModal);
          });

        }
      }, false);
    });
  }

  function ofModal() {
    modalForm.classList.remove('active');
    setTimeout(dNone, 2500);
    function dNone() {
      modalForm.style.display = 'none';
    }
  }
}
// Кнопка вверх с прогрессбаром
export function btnTop() {

  const offset = 300; // появление когда проскролено offset px
  const scrollUp = document.getElementById('btntop');
  const scrollUpPath = document.getElementById('path');
  const pathLength = scrollUpPath.getTotalLength();

  let topScrol = window.scrollY;

  scrollUpPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpPath.style.transition = 'stroke-dashoffset 20ms';

  addActive(topScrol);
  updateDash0ffset(topScrol);

  // onScrol - событие скрола
  window.addEventListener('scroll', () => {
    topScrol = window.scrollY;
    updateDash0ffset(topScrol);
    addActive(topScrol);
  });

  // click - событие клика
  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // updateDash0ffset - длина закрашеной линии
  function updateDash0ffset(top) {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (top * pathLength / height);
    scrollUpPath.style.strokeDashoffset = dashoffset;
  };

  // добавить сласс .active
  function addActive(topScrol) {
    if (topScrol > offset) {
      scrollUp.classList.add('active');
    } else {
      scrollUp.classList.remove('active');
    }
  }

}
// Модальное окно для modal-contacts
export function popup() {
  const body = document.querySelector('body');
  // кнопка onкрытия Попапа
  const popupLinks = document.querySelectorAll('.popup-link');
  // фиксированные объекты
  const loskPadding = document.querySelectorAll('.losk-padding');
  // кнопка закрытия Попапа
  const popupCloses = document.querySelectorAll('.popup__close');
  // время анимации
  // timeout  - должно совпадать в css c: '.8s' 
  // (transition: all .8s ease 0s;);
  const timeout = 800;
  let unlock = true;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      if (popupLink) {
        popupLink.addEventListener('click', function (e) {
          const popupName = popupLink.getAttribute('href');
          if (popupName) {
            const curentPopup = document.getElementById(popupName.replace("#", ''));
            if (curentPopup) {
              popuoOpen(curentPopup);
            }
          }
          e.preventDefault();
          tabPopup();// функция для табов
        });
      }
    }
  }


  if (popupCloses.length > 0) {
    for (let index = 0; index < popupCloses.length; index++) {
      const el = popupCloses[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  // функция открытия
  function popuoOpen(curentPopup) {
    if (curentPopup && unlock) {
      // Если ссылка на Попап находится в открытом Попапе, то закрываем его
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLosk();
      }
      // открываем Попап
      curentPopup.classList.add('open');
      // закрываем по клику вне окна Попапа
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }
  // функция закрытия
  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {// проверяем не открыт ли Попап
        bodyUnlock();
      }
    }
  }
  // функция скрытия скрола
  function bodyLosk() {
    // щирина скрола
    const lockPaddingValue = window.innerWidth - document.querySelector('.content').offsetWidth + 'px';
    // для фиксированных объектов (где нет скролла)
    if (loskPadding.length > 0) {
      for (let index = 0; index < loskPadding.length; index++) {
        const el = loskPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }

    }
    body.style.paddingRight = lockPaddingValue;
    // в css добавляем: body.lock{ overflow: hidden; }
    body.classList.add('lock');

    // блокируем открытие Попапа на время анимации
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  // не убираем корекцию скрола (при вызове Попапа с открытого Попапа) 
  function bodyUnlock() {
    setTimeout(function () {
      if (loskPadding.length > 0) {
        for (let i = 0; i < loskPadding.length; i++) {
          const el = loskPadding[i];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
    }, timeout);
    // блокируем открытие Попапа на время анимации
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  // Закрытие Попапа по клавише "ESC" ('Escape')
  document.addEventListener('keydown', function (e) {
    // console.log('Key: ', e.key);  
    if (e.key === 'Escape') {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
    }
  });

  // Вкладки для модального окна "modal-contacts"
  function tabPopup() {

    const showTab = (elTabBtn) => {
      const elTab = elTabBtn.closest('.tab');
      if (elTabBtn.classList.contains('tab-btn-active')) {
        return;
      }
      const targetId = elTabBtn.dataset.targetId;
      const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
      if (elTabPane) {
        const elTabBtnActive = elTab.querySelector('.tab-btn-active');
        elTabBtnActive.classList.remove('tab-btn-active');
        const elTabPaneShow = elTab.querySelector('.tab-pane-show');
        elTabPaneShow.classList.remove('tab-pane-show');
        elTabBtn.classList.add('tab-btn-active');
        elTabPane.classList.add('tab-pane-show');
      }
    }

    document.addEventListener('click', (e) => {
      // console.log('tut');
      if (e.target && !e.target.closest('.tab-btn')) {
        return;
      }
      const elTabBtn = e.target.closest('.tab-btn');
      showTab(elTabBtn);
    });

  }


}
// Стилизация загрузки файллов (рабочая)
export function fileUpload() {
  const fileInput = document.getElementById('file-input');
  const uploadContainer = document.getElementById('upload-container');
  if (fileInput) {

    fileInput.addEventListener('change', function (e) {


      // let fileLastModified = file.lastModified;
      // const URL = window.webkitURL || window.URL;
      // let url = URL.createObjectURL(file);

      let file = e.target.files[0];

      resultUploade(file)

      function resultUploade(file) {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
          // Имя файла
          let fileName = file.name;
          // расширение из названия
          let fileExtName = fileName.split('.').pop();
          // расширение
          let fileExt = file.type.split('/').pop();
          // Тип файла
          let fileType = file.type.split('/').shift();

          switch (fileType) {
            case 'image':
              addHmlImg(uploadContainer, fileName, 'image');
              break;
            case 'video':
              addHmlImg(uploadContainer, fileName, 'image');
              break;
            case 'text':
              addHmlImg(uploadContainer, fileName, 'txt');
              break;
            case 'application':
              switch (fileExtName) {
                case 'zip':
                case 'rar':
                case '7z':
                  addHmlImg(uploadContainer, fileName, 'zip');
                  break;
                case 'pdf':
                  addHmlImg(uploadContainer, fileName, 'pdf');
                  break;
                case 'ppt':
                  addHmlImg(uploadContainer, fileName, 'ppt');
                  break;
                case 'xlsx':
                  addHmlImg(uploadContainer, fileName, 'xlsx');
                  break;
                case 'xml':
                case 'doc':
                case 'docx':
                  addHmlImg(uploadContainer, fileName, 'word');
                  break;

                default:
                  addHmlImg(uploadContainer, fileName, 'unknown');
              }
              break;

            default:
              addHmlImg(uploadContainer, fileName, 'unknown');
          }

        };

        reader.onerror = function () {
          console.log('error');
        };

      }


      function addHmlImg(el, name, type, ok = 1) {
        let div = document.createElement('div');
        div.className = 'file-image';
        div.innerHTML = '<img src="https://mcrealit.com/wp-content/themes/mcrealit/images/' + type + '.png" alt="' + type + '"><p>' + name + '</p>';

        if (ok) {
          el.classList.add('load');
        } else {
          el.classList.add('load', 'load-error');
        }

        if (document.querySelector('.file-image')) {
          document.querySelector('.file-image').replaceWith(div);
        } else {
          el.before(div);
        }


      }

    });
  }




}
// Стилизация загрузки файллов
export function fileUploads() {
  const fileInput = document.getElementById('file-input');
  const uploadContainer = document.getElementById('upload-container');
  if (fileInput) {

    fileInput.addEventListener('change', function (e) {

      let file = e.target.files[0];


      // var URL = window.URL || window.webkitURL,
      //   imageUrl,
      //   image;

      // if (URL) {
      //   imageUrl = URL.createObjectURL(file);
      //   image = document.createElement("img");
      //   image.onload = function () {
      //     URL.revokeObjectURL(imageUrl);
      //   };
      //   image.src = imageUrl;
      //   document.body.appendChild(image);
      // }


      resultUploade(file)

      function resultUploade(file) {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function () {
          // Имя файла
          let fileName = file.name;
          // расширение из названия
          let fileExtName = fileName.split('.').pop();
          // расширение
          let fileExt = file.type.split('/').pop();
          // Тип файла
          let fileType = file.type.split('/').shift();

          switch (fileType) {
            case 'image':
              addHmlImg(uploadContainer, fileName, 'image');
              break;
            case 'video':
              addHmlImg(uploadContainer, fileName, 'image');
              break;
            case 'text':
              addHmlImg(uploadContainer, fileName, 'txt');
              break;
            case 'application':
              switch (fileExtName) {
                case 'zip':
                case 'rar':
                case '7z':
                  addHmlImg(uploadContainer, fileName, 'zip');
                  break;
                case 'pdf':
                  addHmlImg(uploadContainer, fileName, 'pdf');
                  break;
                case 'ppt':
                  addHmlImg(uploadContainer, fileName, 'ppt');
                  break;
                case 'xlsx':
                  addHmlImg(uploadContainer, fileName, 'xlsx');
                  break;
                case 'xml':
                case 'doc':
                case 'docx':
                  addHmlImg(uploadContainer, fileName, 'word');
                  break;

                default:
                  addHmlImg(uploadContainer, fileName, 'unknown');
              }
              break;

            default:
              addHmlImg(uploadContainer, fileName, 'unknown');
          }

        };

        reader.onerror = function () {
          console.log('error');
        };

      }


      function addHmlImg(el, name, type, ok = 1) {
        let div = document.createElement('div');
        div.className = 'file-image';
        div.innerHTML = '<img src="https://mcrealit.com/wp-content/themes/mcrealit/images/' + type + '.png" alt="' + type + '"><p>' + name + '</p>';

        if (ok) {
          el.classList.add('load');
        } else {
          el.classList.add('load', 'load-error');
        }

        if (document.querySelector('.file-image')) {
          document.querySelector('.file-image').replaceWith(div);
        } else {
          el.before(div);
        }


      }

    });
  }




}
// Модальное окно - конструктор (video)
export function modConstructor() {

  const showModal = document.querySelectorAll('.video-link__link, .firstr__media-link');

  if (showModal.length != 0) {

    let marginRigh = 0;
    let marginTop = 0;
    class ItcModal {
      #elem;
      #template = '<div class="itc-modal-backdrop"><div class="itc-modal-body">{{content}}</div>';
      #templateFooter = '<div class="itc-modal-footer">{{buttons}}</div>';
      #templateBtn = '<button type="button" class="{{class}}" data-action={{action}}>{{text}}</button>';
      #eventShowModal = new Event('show.itc.modal', { bubbles: true });
      #eventHideModal = new Event('hide.itc.modal', { bubbles: true });
      #disposed = false;

      constructor(options = []) {
        this.#elem = document.createElement('div');
        this.#elem.classList.add('itc-modal');
        let html = this.#template.replace('{{title}}', options.title || 'Новое окно');
        html = html.replace('{{content}}', options.content || '');
        const buttons = (options.footerButtons || []).map((item) => {
          let btn = this.#templateBtn.replace('{{class}}', item.class);
          btn = btn.replace('{{action}}', item.action);
          return btn.replace('{{text}}', item.text);
        });
        const footer = buttons.length ? this.#templateFooter.replace('{{buttons}}', buttons.join('')) : '';
        html = html.replace('{{footer}}', footer);
        this.#elem.innerHTML = html;
        document.body.append(this.#elem);
        this.#elem.addEventListener('click', this.#handlerCloseModal.bind(this));
      }
      #handlerCloseModal(e) {
        if (e.target.closest('.video__close') || e.target.classList.contains('itc-modal-backdrop')) {
          this.hide();
          document.body.classList.remove('ofmod');
          document.body.style.marginRight = null;
          if (!videoElem.paused) {
            videoElem.pause();
            videoBtn.classList.remove('play');
          } else {
            videoBtn.classList.remove('play');
          }
        }
      }
      show() {
        if (this.#disposed) {
          return;
        }
        this.#elem.classList.add('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventShowModal);
      }
      hide() {
        this.#elem.classList.remove('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventHideModal);
      }
      dispose() {
        this.#elem.remove(this.#elem);
        this.#elem.removeEventListener('click', this.#handlerCloseModal);
        this.#disposed = true;
      }
      setBody(html) {
        this.#elem.querySelector('.itc-modal-body').innerHTML = html;
      }
      setTitle(text) {
        this.#elem.querySelector('.itc-modal-title').innerHTML = text;
      }
    }
    // создаём модальное окно
    const modal = new ItcModal({
      content: '<div id="videos" class="video"><div class="close video__close"><div class="close__x"></div></div><video id="video" src="/wp-content/themes/mcrealit/files/video/video-realit.m4v" controls width="100%" height="100%"></video><div id="video__btn" class="video__btn"><img src="/wp-content/themes/mcrealit/images/video.jpg" alt="video"></div></div>'
    });
    // при клике по кнопке .video-link__link
    showModal.forEach(el => {
      // откроем модальное окно
      el.addEventListener('click', modalOpen);
    });

    function modalOpen() {
      modal.show();
      marginRigh = calculateScrollBarWidth();
      document.body.classList.add('ofmod');
      document.body.style.marginRight = marginRigh;
      videoMarginTop();
      window.addEventListener("resize", videoMarginTop, false);
    }

    // Видео - управление
    let videoElem = document.getElementById('video');
    let videoBtn = document.getElementById('video__btn');
    // let modalBody = document.querySelector('.itc-modal-body');
    // запускам воспроизведение и скрываем изображение
    videoBtn.addEventListener('click', function () {
      if (videoElem.paused) {
        videoElem.play();
        videoBtn.classList.add('play');
      }
    }, false);

    // Ширина прокрутки
    function calculateScrollBarWidth() {
      return (window.innerWidth - document.body.clientWidth) + 'px';
    }

    // добавляем margin-top для окна с видео
    function videoMarginTop() {
      marginTop = (((document.documentElement.clientHeight - videoElem.offsetHeight) / 2) + 'px');
      document.querySelector('.itc-modal-body').style.marginTop = marginTop;
    }
  }

}
// Модальное окно - конструктор (video data-ссылка на видео / несколько кнопок на странице)
export function modConstrBtnVideo() {

  //кнопки video
  const showModal = document.querySelectorAll('.video-link__link, .firstr__media-link');

  if (showModal.length != 0) {

    let marginRigh = 0;
    let marginTop = 0;

    class ItcModal {
      #elem;
      #template = '<div class="itc-modal-backdrop"><div class="itc-modal-body">{{content}}</div>';
      #templateFooter = '<div class="itc-modal-footer">{{buttons}}</div>';
      #templateBtn = '<button type="button" class="{{class}}" data-action={{action}}>{{text}}</button>';
      #eventShowModal = new Event('show.itc.modal', { bubbles: true });
      #eventHideModal = new Event('hide.itc.modal', { bubbles: true });
      #disposed = false;

      constructor(options = []) {
        this.#elem = document.createElement('div');
        this.#elem.classList.add('itc-modal');
        let html = this.#template.replace('{{title}}', options.title || 'Новое окно');
        html = html.replace('{{content}}', options.content || '');
        html = html.replace('{{video}}', options.video || '#');
        html = html.replace('{{image}}', options.image || '#');
        const buttons = (options.footerButtons || []).map((item) => {
          let btn = this.#templateBtn.replace('{{class}}', item.class);
          btn = btn.replace('{{action}}', item.action);
          return btn.replace('{{text}}', item.text);
        });
        const footer = buttons.length ? this.#templateFooter.replace('{{buttons}}', buttons.join('')) : '';
        html = html.replace('{{footer}}', footer);
        this.#elem.innerHTML = html;
        document.body.append(this.#elem);
        this.#elem.addEventListener('click', this.#handlerCloseModal.bind(this));
      }

      #handlerCloseModal(e) {
        if (e.target.closest('.video__close') || e.target.classList.contains('itc-modal-backdrop')) {
          this.hide();
          document.body.classList.remove('ofmod');
          document.body.style.marginRight = null;
          if (!videoElem.paused) {
            videoElem.pause();
            videoBtn.classList.remove('play');
          } else {
            videoBtn.classList.remove('play');
          }
        }
      }

      show() {
        if (this.#disposed) {
          return;
        }
        this.#elem.classList.add('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventShowModal);
      }

      hide() {
        this.#elem.classList.remove('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventHideModal);
      }

      dispose() {
        this.#elem.remove(this.#elem);
        this.#elem.removeEventListener('click', this.#handlerCloseModal);
        this.#disposed = true;
      }

      setBody(html) {
        this.#elem.querySelector('.itc-modal-body').innerHTML = html;
      }

      setVideo(video) {
        this.#elem.querySelector('video').src = video;
      }

      setImage(image) {
        this.#elem.querySelector('img').src = image;
      }

    }


    // создаём модальное окно (video)
    const modal = new ItcModal({
      content: '<div id="videos" class="video"><div class="close video__close"><div class="close__x"></div></div><video id="video" src="{{video}}" controls width="100%" height="100%"></video><div id="video__btn" class="video__btn"><img src="{{image}}" alt="video"></div></div>',
      video: '/wp-content/themes/mcrealit/files/video/video-realit.m4v',
      image: '/wp-content/themes/mcrealit/images/video.jpg'
    });


    // при клике по кнопке из video
    showModal.forEach(el => {
      // откроем модальное окно
      el.addEventListener('click', modalOpen, false);
    });

    function modalOpen() {
      if (this.dataset.video) {
        modal.setVideo(this.dataset.video);
      }
      if (this.dataset.image) {
        modal.setImage(this.dataset.image);
      }

      modal.show();
      marginRigh = calculateScrollBarWidth();
      document.body.classList.add('ofmod');
      document.body.style.marginRight = marginRigh;
      videoMarginTop();
      window.addEventListener("resize", videoMarginTop, false);
    }

    // Видео - управление
    let videoElem = document.getElementById('video');
    let videoBtn = document.getElementById('video__btn');
    // let modalBody = document.querySelector('.itc-modal-body');
    // запускам воспроизведение и скрываем изображение
    videoBtn.addEventListener('click', function () {
      if (videoElem.paused) {
        videoElem.play();
        videoBtn.classList.add('play');
      }
    }, false);

    // добавляем margin-top для окна с видео
    function videoMarginTop() {
      marginTop = (((document.documentElement.clientHeight - videoElem.offsetHeight) / 2) + 'px');
      document.querySelector('.itc-modal-body').style.marginTop = marginTop;
    }

    // Ширина прокрутки
    function calculateScrollBarWidth() {
      return (window.innerWidth - document.body.clientWidth) + 'px';
    }

  }

}
// Модальное окно - конструктор (video data-ссылка на видео + modal-contacts / несколько кнопок на странице)
export function modConstr() {

  //кнопки video
  const showModal = document.querySelectorAll('.video-link__link, .firstr__media-link');
  //кнопки modal-contacts
  const btnContacts = document.querySelectorAll('.btn-contacts');

  if (showModal.length != 0 || btnContacts.length != 0) {

    let marginRigh = 0;
    let marginTop = 0;

    class ItcModal {
      #elem;
      #template = '<div class="itc-modal-backdrop"><div class="itc-modal-body" style="max-width:{{maxw}};">{{content}}</div>';
      #templateFooter = '<div class="itc-modal-footer">{{buttons}}</div>';
      #templateBtn = '<button type="button" class="{{class}}" data-action={{action}}>{{text}}</button>';
      #eventShowModal = new Event('show.itc.modal', { bubbles: true });
      #eventHideModal = new Event('hide.itc.modal', { bubbles: true });
      #disposed = false;

      constructor(options = []) {
        this.#elem = document.createElement('div');
        this.#elem.classList.add('itc-modal');
        let html = this.#template.replace('{{title}}', options.title || 'Новое окно');
        html = html.replace('{{content}}', options.content || '');
        html = html.replace('{{maxw}}', options.maxw || '100%');
        html = html.replace('{{video}}', options.video || '#');
        html = html.replace('{{image}}', options.image || '#');
        const buttons = (options.footerButtons || []).map((item) => {
          let btn = this.#templateBtn.replace('{{class}}', item.class);
          btn = btn.replace('{{action}}', item.action);
          return btn.replace('{{text}}', item.text);
        });
        const footer = buttons.length ? this.#templateFooter.replace('{{buttons}}', buttons.join('')) : '';
        html = html.replace('{{footer}}', footer);
        this.#elem.innerHTML = html;
        document.body.append(this.#elem);
        this.#elem.addEventListener('click', this.#handlerCloseModal.bind(this));
      }

      #handlerCloseModal(e) {
        if (e.target.closest('.close') || e.target.classList.contains('itc-modal-backdrop')) {
          this.hide();
          document.body.classList.remove('ofmod');
          document.body.style.marginRight = null;
          if (!videoElem.paused) {
            videoElem.pause();
            videoBtn.classList.remove('play');
          } else {
            videoBtn.classList.remove('play');
          }
        }
      }

      show() {
        if (this.#disposed) {
          return;
        }
        this.#elem.classList.add('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventShowModal);
      }

      hide() {
        this.#elem.classList.remove('itc-modal-show');
        this.#elem.dispatchEvent(this.#eventHideModal);
      }

      dispose() {
        this.#elem.remove(this.#elem);
        this.#elem.removeEventListener('click', this.#handlerCloseModal);
        this.#disposed = true;
      }

      setBody(html) {
        this.#elem.querySelector('.itc-modal-body').innerHTML = html;
      }

      setVideo(video) {
        this.#elem.querySelector('video').src = video;
      }

      setImage(image) {
        this.#elem.querySelector('img').src = image;
      }

    }

    // VIDEO
    if (showModal.length != 0) {
      // создаём модальное окно (video)
      const modal = new ItcModal({
        content: '<div id="videos" class="video"><div class="close video__close"><div class="close__x"></div></div><video id="video" src="{{video}}" controls width="100%" height="100%"></video><div id="video__btn" class="video__btn"><img src="{{image}}" alt="video"></div></div>',
        video: '/wp-content/themes/mcrealit/files/video/video-realit.m4v',
        image: '/wp-content/themes/mcrealit/images/video.jpg',
        maxw: '920px'
      });


      // при клике по кнопке из video
      showModal.forEach(el => {
        // откроем модальное окно
        el.addEventListener('click', modalOpen, false);
      });

      function modalOpen() {
        if (this.dataset.video) {
          modal.setVideo(this.dataset.video);
        }
        if (this.dataset.image) {
          modal.setImage(this.dataset.image);
        }

        modal.show();
        marginRigh = calculateScrollBarWidth();
        document.body.classList.add('ofmod');
        document.body.style.marginRight = marginRigh;
        videoMarginTop();
        window.addEventListener("resize", videoMarginTop, false);
      }

      // Видео - управление
      let videoElem = document.getElementById('video');
      let videoBtn = document.getElementById('video__btn');
      // let modalBody = document.querySelector('.itc-modal-body');
      // запускам воспроизведение и скрываем изображение
      videoBtn.addEventListener('click', function () {
        if (videoElem.paused) {
          videoElem.play();
          videoBtn.classList.add('play');
        }
      }, false);

    }

    // CONTACTS
    if (btnContacts.length != 0) {

      // создаём модальное окно (contacts)
      const contacts = new ItcModal({
        content: '<div id="modal-contacts" class="modal-contacts"><div class="close modal-contacts__close"><div class="close__x"></div></div><p>tuta</p></div>',
        maxw: '1200px'

      });
      // при клике по кнопке из modal-contacts
      btnContacts.forEach(el => {
        // откроем модальное окно
        el.addEventListener('click', contactsOpen, false);
      });

      function contactsOpen() {

        if (this.dataset.video) {
          contacts.setVideo(this.dataset.video);
        }
        if (this.dataset.image) {
          contacts.setImage(this.dataset.image);
        }

        contacts.show();
        marginRigh = calculateScrollBarWidth();
        document.body.classList.add('ofmod');
        document.body.style.marginRight = marginRigh;
        videoMarginTop();
        window.addEventListener("resize", videoMarginTop, false);
      }
    }

    // Общие функции
    // добавляем margin-top для окна с видео
    function videoMarginTop() {
      marginTop = (((document.documentElement.clientHeight - videoElem.offsetHeight) / 2) + 'px');
      document.querySelector('.itc-modal-body').style.marginTop = marginTop;
    }

    // Ширина прокрутки
    function calculateScrollBarWidth() {
      return (window.innerWidth - document.body.clientWidth) + 'px';
    }


  }

}
// Видео - кнопка над видео
export function btnVideo() {
  // <video poster="@img/poster.jpg" preload="metadata">
  // <source src="video.mp4" type="video/mp4">
  // </video>
  // Кнопка videoBtn - запускает видео и включает стандартное управление 
  // По окончании воспроизведения - возврат в исходное состояние
  const videoBtn = document.querySelectorAll('.btn-video');
  if (videoBtn.length > 0) {
    videoBtn.forEach(function (el) {
      const video = el.querySelector('video');
      const playButton = el.querySelector('.btn-video__pause');
      // const v = video.currentSrc;
      if (playButton && video) {
        playButton.addEventListener('click', handlePlayButton);
      }

      async function playVideo() {
        try {
          await video.play();
          playButton.classList.add("playing");
          video.addEventListener("ended", resetVideo, false);
          // video.addEventListener('click', handlePlayButton, false);

          // // отслеживаем движется ли мышь и добавляем класс
          // let timer;
          // el.addEventListener("mousemove", function () {
          //   playButton.classList.add("active");
          //   clearTimeout(timer);
          //   timer = setTimeout(mouseStopped,300);
          // });
        } catch (err) {
          playButton.classList.remove("playing");
        }
      }

      function handlePlayButton() {
        if (video.paused) {
          playVideo();
          video.controls = "controls";
        } else {
          video.pause();
          playButton.classList.remove("playing");
          video.controls = "";
        }
      }

      function resetVideo() {
        this.src = this.currentSrc; // сбрасывает элемент видео
        this.controls = "";
        playButton.classList.remove("playing");
      }

      // function mouseStopped() {
      //   playButton.classList.remove("active");
      // }

    });



  }


}
// Слайдер - стр. Блог
export function slideBlog() {
  // mainSlider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on("beforeChange", function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    });

    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 10000,
      dots: true,
      fade: true,
      arrows: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'>prev</button>",
      nextArrow: "<button type='button' class='slick-next pull-right'>next</button>",
      responsive: [
        { breakpoint: 767, settings: { dots: false, arrows: false } }
      ]
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay
        });

        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });

      });

    }

  }

  mainSlider();
}
// Валидация формы - показать лабел при фокусе
// export function formOnLabel() {
//   // Пример разметки:
//   // <div class="f-input f-name fcontsec__form-name">[text* your-name id:name autocomplete:name placeholder "Name*"]<label for="your-name">Name<span>*</span></label></div>
//   const fInput = document.querySelectorAll('.f-input');
//   const fLabel = document.querySelectorAll('label');

//   if (fInput.length > 0) {



//     fInput.forEach(function (el) {

//       let outInput;

//       if (el.querySelector('input')) {
//         outInput = el.querySelector('input');
//       } else if (el.querySelector('textarea')) {
//         outInput = el.querySelector('textarea');
//       }

//       fLabel.forEach(function (el) {
//         el.style.opacity = 0;
//       });

//       outInput.addEventListener("focus", (e) => {
//         valError(e); 
//         el.querySelector('label').style.opacity = 1;      
//       });

//     });

//   }


//   function valError(e) {

//     // e.forEach(function (el) {



//       const valForm = e.querySelector('.wpcf7-not-valid');

//       if (valForm) {
//         valForm.parentNode.parentNode.classList.add('error');
//       } 
//       // else if (!valForm && valForm.parentNode.parentNode.classList.contains('error')) {
//       //   valForm.parentNode.parentNode.classList.remove('error');
//       // }

//     // });

//   }


// }

// export function formOnLabel() {

//   const fInput = document.querySelectorAll('.f-input');

//   if (fInput.length > 0) {

//     fInput.forEach(function (el) {

//       const outInput = el.querySelector('.wpcf7-form-control');

//       if (outInput) {

//         outInput.addEventListener("focus", (e) => {

//           const fLabel = e.target.parentElement.parentElement;
//           let fValid = e.target.classList.contains("wpcf7-not-valid");


//           if (fValid) {
//             fLabel.classList.add('error');
//           }






//         });

//       }

//     });

//   }
// }
export function formOnLabel() {
  const formWpcf7 = document.querySelectorAll('.wpcf7');// ищем все формы
  if (formWpcf7.length > 0) {

    formWpcf7.forEach(function (el) {  // Перебираем формы
      // переменная для определения валидации всех полей
      // let validForm = false;
      // ищем поля с обязательной валидацией
      // const formName = el.querySelectorAll('.wpcf7-validates-as-required');
      // ищем поля
      const formName = el.querySelectorAll('.wpcf7-form-control-wrap input');
      // ищем кнопку
      // const formSubmit = el.querySelector('input[type="submit"]');
      // ищем чекбокс
      const formСheckbox = el.querySelector('input[type=checkbox]');

      formName.forEach(function (e) { // Перебираем поля
        // отслеживаем событие "фокус"
        e.addEventListener("focus", (elFocus) => {
          // показываем название поля сверху (тег 'label')
          // elFocus.target.parentElement.parentElement.querySelector('label').style.opacity = 1;
          if (elFocus.target.closest('div').querySelector('label')) {
            elFocus.target.closest('div').querySelector('label').style.opacity = 1;
          }
          // проходим по всем полям и проверяем валидацию по классу "wpcf7-not-valid"
          formValid(formName);

        });
        // отслеживаем событие "потеря фокуса"
        e.addEventListener("blur", (elFocus) => {
          // показываем название поля сверху (тег 'label')
          // elFocus.target.parentElement.parentElement.querySelector('label').style.opacity = 0;
          if (elFocus.target.closest('div').querySelector('label')) {
            elFocus.target.closest('div').querySelector('label').style.opacity = 0;
          }
          // проходим по всем полям и проверяем валидацию по классу "wpcf7-not-valid"
          formValid(formName);

        });
        // отслеживаем событие "нажатие наклавишу"
        e.addEventListener("keyup", (elKeyup) => {
          if (elKeyup.target.value.length > 0) {
            elKeyup.target.parentElement.parentElement.classList.remove('error');
          } else {
            elKeyup.target.parentElement.parentElement.classList.add('error');
          }
          // formValid(formName);
        });
      });
      // отслеживаем событие окончании изменения значения элемента формы (чекбокс)
      if (formСheckbox) {
        formСheckbox.addEventListener('change', function () {
          if (this.checked) {
            // задержка и проходим по всем полям и проверяем валидацию по классу "wpcf7-not-valid"
            setTimeout(formValid, 500, formName);

          }
        });
      }


      function formValid(formName) {
        // const arr = [];
        // проходим по всем полям и проверяем валидацию по классу "wpcf7-not-valid"
        formName.forEach(function (el) {

          if (el.classList.contains('wpcf7-not-valid')) {
            el.parentElement.parentElement.classList.add('error');
            // validForm = false;
          } else {
            el.parentElement.parentElement.classList.remove('error');
            // validForm = true;
          }
          // arr[i] = validForm;

        });


        // if (arr.includes(false) === false) {
        //   validForm = true;
        // }else{
        //   validForm = false;
        // }
      }



      // const formName = el.querySelector('input[type="text"]');
      // const formTel = el.querySelector('input[type="tel"]');
      // const formSubmit = el.querySelector('input[type="submit"]');
      // const formTextarea = el.querySelector('textarea');

      // formSubmit.disabled = true;
      // // document.addEventListener('keyup', function () {
      // //   // if (formTel.value.indexOf('_') == -1 && formTel.value.length > 0 && formName.value.length > 0) {
      // //   if ( formTel.value.length > 0 && formName.value.length > 0 && formTextarea.value.length > 0) {
      // //     formSubmit.disabled = false;
      // //   } else {
      // //     formSubmit.disabled = true;
      // //   }
      // // });
    });
  }
}
// End NEV


// Проверка поддержки avif и webp
export function isAvifWebp() {
  // Проверка поддержки avif
  function testAvif(callback) {
    let AviF = new Image()
    AviF.onload = AviF.onerror = function () {
      callback(AviF.height == 2)
    }
    AviF.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
  }
  // Проверка поддержки webp
  function testWebp(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // проверка на IE
  function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  }

  // Добавление класса для HTML
  // if (isInternetExplorer() === false) {
  // Добавление класса _avif для HTML 
  testAvif(function (support) {
    if (support === true) {
      document.documentElement.classList.add('avif')
    } else {
      // Добавление класса _webp или _no-webp для HTML 
      testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
      })
    }
  })
  // } else {
  //   document.documentElement.classList.add('no-webp')
  // }

}

// Меню бургер
export function menuHeader() {

  const iconMenu = document.querySelector('.menu__icons');

  // // Вычисление ширины боковой прокрутки (обычно 17px)
  let scrolWidth = window.innerWidth - document.documentElement.clientWidth;
  window.addEventListener("resize", function () { //пересчет при изменении ширины окна
    scrolWidth = window.innerWidth - document.documentElement.clientWidth;
  }, false);
  // // End / Вычисление ширины боковой прокрутки

  if (iconMenu) {
    iconMenu.addEventListener("click", function () {
      document.body.classList.toggle('lock');
      document.body.classList.toggle('active');

      const menuLinks = document.querySelectorAll('#nav li');


      if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
          menuLink.addEventListener("click", ofMenu);
        });
      }

      function ofMenu(e) {
        // e.preventDefault();
        if (document.body.classList.contains('active')) {
          document.body.classList.remove('lock')
          document.body.classList.remove('active');
        }
      }

    });
  }
}


// Переключатель языка
export function menuLang() {
  const menLangs = document.getElementById('land');
  const menClick = document.querySelector('.land__arrow');
  if (menLangs) {
    menClick.addEventListener("click", onLang);
    function onLang() {
      menLangs.classList.toggle('active');
    }
  }

}

// Модальное окно
export function allMmodal() {
  const modalClass = document.querySelectorAll('.popup')
  const modal = document.getElementById('modal');

  if (modalClass.length > 0) {
    modalClass.forEach(modalClas => {
      modalClas.addEventListener("click", opModal);
    });
  }
  function opModal(e) {
    e.preventDefault();

    if (modal) {
      document.body.classList.add('lock')
      modal.classList.add('active');
      const close = modal.querySelector('.close');
      if (close) {
        close.addEventListener("click", ofModal);
      }
    }
  }

  function ofModal(e) {
    e.preventDefault();
    document.body.classList.remove('lock')
    modal.classList.remove('active');
  }
}



// Отправка текста в Whatsapp
export function formWhatsapp() {
  const form = document.querySelector('.form');
  const number = '79919578752';
  function sendToWhatsapp(textarea, phone) {

    textarea = 'Сообщение%20с%20сайта%20elitfue.com%20:%0A' + encodeURIComponent(textarea);
    let url = `https://web.whatsapp.com/send?phone=${phone}&text=${textarea}&source=&data=`;

    window.open(url);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // const text = e.currentTarget.querySelector('input').value;
    const textarea = e.currentTarget.querySelector('textarea').value;
    // sendToWhatsapp(text, textarea, number);
    sendToWhatsapp(textarea, number);

    document.body.classList.remove('lock');
    document.getElementById('modal').classList.remove('active');
  });
}

// Настройки слайдеров Swiper
export function swipers() {

  // Если слайдер находится во флех елементе, то для контейнера добавляем стиль: min-width: 0;
  const swiper = new Swiper('.slider', {
    // Дополнительные параметры
    // direction: 'vertical',
    // Бесконечная прокрутка 
    loop: true,

    // Если нам нужна нумерация страниц
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // И если нам нужна полоса прокрутки
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // Управление клавиатурой
    // keyboard: {
    //   // вкл.выкл
    //   enabled: true,
    //   // только когда слайдер в пределах вьюпорта
    //   onlyInViewport: true,
    //   // управлять клавишами pageUp, pageDown
    //   // pageUpDown: true,
    // },
    // Количество слайдов
    slidesPerView: 1,


    // Отключить функционал если мало слайдов
    watchOverflow: true,

    // Отступы между слайдами
    spaceBetween: 20,

    // Центрирование главного слайда
    centeredSlides: true,

    // Стартовый слайд
    initialSlide: 1,

    // Отзывчивые точки останова
    breakpoints: {
      // когда ширина окна >= 480px
      400: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // когда ширина окна >= 1200px
      1000: {
        slidesPerView: 2.65,
        spaceBetween: 75
      },

      // // когда ширина окна >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
    }

  });


  // const swiper2 = new Swiper('.swiper2', {
  //       // Управление клавиатурой
  //       keyboard: {
  //         // вкл.выкл
  //         enabled: true,
  //         // только когда слайдер в пределах вьюпорта
  //         onlyInViewport: true,
  //         // управлять клавишами pageUp, pageDown
  //         // pageUpDown: true,
  //       },
  //       // Количество слайдов
  //       slidesPerView: 5,


  //       // Отключить функционал если мало слайдов
  //       watchOverflow: true,
  //   // Если нам нужна полоса прокрутки
  //   // scrollbar: {
  //   //   el: '.swiper-scrollbar',
  //   // },
  // });
}

// Клик и перетащить как в слайдере
export function clickDrap() {
  const slider = document.querySelector('.price__riht');// контейнер
  if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  }

}

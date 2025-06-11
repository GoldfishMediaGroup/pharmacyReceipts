// function headerBurger() {
//   const body = document.body;
//   const header = document.querySelector('header');
//   const burger = document.querySelector('.header__burger');
//   const navWrapper = document.querySelector('.header__nav-wrapper');
//   const bannerMob = document.querySelector('.header__banner');
//   const logo = document.querySelector('.header__logo-box');

//   function openBurger() {
//     header.classList.add('no-transform');
//     body.classList.add('no-scroll');
//     document.documentElement.classList.add('no-scroll');
//     // setTimeout(() => {
//     burger.classList.add('isActive');
//     navWrapper.classList.add('isActive');
//     bannerMob.classList.add('isNoBg');
//     // }, 200)
//   }

//   function closeBurger() {
//     body.classList.remove('no-scroll');
//     document.documentElement.classList.remove('no-scroll');
//     header.classList.remove('no-transform');
//     burger.classList.remove('isActive');
//     navWrapper.classList.remove('isActive');
//     bannerMob.classList.remove('isNoBg');
//   }

//   burger.addEventListener('click', () => {
//     burger.classList.contains('isActive') ? closeBurger() : openBurger();
//   });

//   logo.addEventListener('click', () => {
//     closeBurger();
//   });

//   navWrapper.addEventListener('click', (e) => {
//     if (e.target.classList.contains('header__nav-link')) {
//       closeBurger();
//     }
//   });

//   window.addEventListener('resize', () => {
//     if (window.innerWidth > 768 && burger.classList.contains('isActive')) {
//       closeBurger();
//     }
//   });
// }

// export default headerBurger;

// import Lenis from "@studio-freight/lenis/types";
import { lenis } from './smoothScroll';

function headerBurger() {
  const body = document.body;
  const html = document.documentElement;
  const header = document.querySelector('header');
  const burger = document.querySelector('.header__burger');
  const navWrapper = document.querySelector('.header__nav-wrapper');
  const bannerMob = document.querySelector('.header__banner');
  const logo = document.querySelector('.header__logo-box');

  // Класс для блокировки скролла
  const disableScrollClass = 'no-scroll';

  function openBurger() {
    header.classList.add('no-transform');
    body.classList.add(disableScrollClass);
    html.classList.add(disableScrollClass); // Для Safari

    burger.classList.add('isActive');
    navWrapper.classList.add('isActive');
    bannerMob.classList.add('isNoBg');
    // if (lenis && typeof lenis.stop === 'function') {
    //   lenis.stop();
    // }
  }

  function closeBurger() {
    header.classList.remove('no-transform');
    body.classList.remove(disableScrollClass);
    html.classList.remove(disableScrollClass);

    burger.classList.remove('isActive');
    navWrapper.classList.remove('isActive');
    bannerMob.classList.remove('isNoBg');
    //    if (lenis && typeof lenis.start === 'function') {
    //   lenis.start();
    // }
  }

  // Обработчик клика на бургер
  burger.addEventListener('click', () => {
    burger.classList.contains('isActive') ? closeBurger() : openBurger();
  });

  // Закрытие бургер-меню при клике на логотип
  logo.addEventListener('click', closeBurger);

  // Закрытие бургер-меню при клике на ссылку
  navWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__nav-link')) {
      closeBurger();
    }
  });

  // Закрытие меню при ресайзе окна
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && burger.classList.contains('isActive')) {
      closeBurger();
    }
  });

  // Устранение проблем с Safari
  // Проверка на инерционную прокрутку и touch-action
  navWrapper.style.touchAction = 'none'; // Отключение жестов прокрутки внутри меню
}

export default headerBurger;

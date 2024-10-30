import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function swipers() {
  const ribbonSwiperContacts = () => {
    const swiperRibbon = new Swiper('.swiper-ribbon--contacts', {
      speed: 8000,
      // slidesPerView: "2.3",
      slidesPerView: 'auto',
      spaceBetween: rem(3.2),
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        769: {
          slidesPerView: 'auto',
          speed: 5000
        }
      }
    });
  };
  const ribbonSwiperAdvantages = () => {
    const swiperRibbon = new Swiper('.swiper-ribbon--advantages', {
      speed: 8000,
      // slidesPerView: "2.3",
      slidesPerView: 'auto',
      spaceBetween: rem(3.2),
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        769: {
          slidesPerView: 'auto',
          speed: 15000
        }
      }
    });
  };

  const advantagesMobSwiper = () => {
    const advantagesSwiper = new Swiper('.advantages__swiper', {
      slidesPerView: 'auto',
      spaceBetween: rem(3.2),
      speed: 800,
      loop: true,
      centeredSlides: true,
      // initialSlide: 2,
      breakpoints: {
        768: {}
      }
    });
  };

  const returnSwiper = () => {
    const thumbSlides = document.querySelectorAll('.return__thumb');

    const swiperMmainBanner = new Swiper('.return__swiper', {
      slidesPerView: 1,
      effect: 'fade',
      allowTouchMove: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      fadeEffect: {
        crossFade: true
      },
      speed: 500,
      // autoHeight: true,
      breakpoints: {
        768: {}
      },
      initialSlide: 1,
      on: {
        slideChangeTransitionStart: function () {
          const activeSlide = this.slides[this.activeIndex].dataset.index;
          thumbSlides.forEach((item) => item.classList.remove('isActive'));
          thumbSlides[activeSlide].classList.add('isActive');
        }
      }
    });

    thumbSlides.forEach((slide, index) => {
      slide.addEventListener('click', () => {
        swiperMmainBanner.slideTo(index);
        thumbSlides.forEach((item) => item.classList.remove('isActive'));
        slide.classList.add('isActive');
      });
    });
  };

  const howMobSwiper = () => {
    const advantagesSwiper = new Swiper('.how__swiper', {
      slidesPerView: '1',
      spaceBetween: rem(3.2),
      speed: 800,
      centeredSlides: true,
      // initialSlide: 2,
      breakpoints: {
        768: {}
      },
      pagination: {
        el: '.how__swiper-pagination'
      }
    });
  };

  const contactsSwiper = () => {
    const swiperRibbon = new Swiper('.contacts__swiper', {
      speed: 2000,
      slidesPerView: '1',
      effect: 'fade',
      // fadeEffect: {
      //   crossFade: true
      // },
      spaceBetween: rem(3.2),
      loop: true,
      allowTouchMove: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      }
    });
  };

  try {
    ribbonSwiperContacts();
  } catch {}
  try {
    ribbonSwiperAdvantages();
  } catch {}
  try {
    advantagesMobSwiper();
  } catch {}
  try {
    returnSwiper();
  } catch {}
  try {
    howMobSwiper();
  } catch {}
  try {
    contactsSwiper();
  } catch {}
}

export default swipers;

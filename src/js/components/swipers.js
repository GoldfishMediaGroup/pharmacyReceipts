import Swiper from 'swiper/bundle';
import { Autoplay, Controller } from 'swiper/modules';
import marquee from 'jquery.marquee';
window.$ = window.jQuery = require('jquery');

import { e as effectInit } from './../../../node_modules/swiper/shared/effect-init.mjs';
import { e as effectTarget } from './../../../node_modules/swiper/shared/effect-target.mjs';
import { e as effectVirtualTransitionEnd } from './../../../node_modules/swiper/shared/effect-virtual-transition-end.mjs';
import { k as getSlideTransformEl } from './../../../node_modules/swiper/shared/utils.mjs';

import 'swiper/css/bundle';
import { rem } from '../utils/constants';

function EffectCreativeMore({ swiper, extendParams, on }) {
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplierOpacity: (progress) => progress,
      // progressMultiplierX: (progress) => progress,
      progressMultiplierX: (progress) => {
        return progress * (1 - Math.abs(progress) * 0.13); // Чем дальше от центра, тем слабее сдвиг
      },
      progressMultiplierY: (progress) => progress,

      progressMultiplierZ: (progress) => progress,

      progressMultiplierScale: (progress) => progress,
      progressMultiplierRotation: (progress) => progress,

      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });

  const getTranslateValue = (value) => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };

  const setTranslate = () => {
    const { slides, wrapperEl, slidesSizesGrid } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplierOpacity,
      progressMultiplierX,
      progressMultiplierY,
      progressMultiplierZ,
      progressMultiplierScale,
      progressMultiplierRotation
    } = params;

    const isCenteredSlides = swiper.params.centeredSlides;

    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      // wrapperEl.style.transform = `translateX(calc(50% - ${margin}px)) translateY(50%)`;
      // wrapperEl.style.transform = `translateX(calc(50% - ${margin}px)) translateZ(50px)`;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
      // wrapperEl.style.transform = `translateX(calc(50% - ${margin}px)) rotateX(-5deg)`;
    }

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;

      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }

      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      } else {
        // data = params.current;
        // custom = true;
      }
      // set translate
      // (p) => progressMultiplierY(p) * 0.7
      const tm = [progressMultiplierX, progressMultiplierY, progressMultiplierZ];
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(tm[index](progress))}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        r[index] = data.rotate[index] * Math.abs(progressMultiplierRotation(progress));
      });

      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;

      const translateString = t.join(', ');
      const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
      const scaleString =
        originalProgress < 0
          ? `scale(${1 + (1 - data.scale) * progressMultiplierScale(originalProgress)})`
          : `scale(${1 - (1 - data.scale) * progressMultiplierScale(originalProgress)})`;
      const opacityString =
        originalProgress < 0
          ? 1 + (1 - data.opacity) * progressMultiplierOpacity(originalProgress)
          : 1 - (1 - data.opacity) * progressMultiplierOpacity(originalProgress);
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      // if ((custom && data.shadow) || !custom) {
      //   let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
      //   if (!shadowEl && data.shadow) {
      //     // shadowEl = createShadow("creative", slideEl);
      //   }
      //   if (shadowEl) {
      //     const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
      //     shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
      //   }
      // }

      const targetEl = effectTarget(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };

  const setTransition = (duration) => {
    const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));

    transformElements.forEach((el) => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach((shadowEl) => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });

    effectVirtualTransitionEnd({ swiper, duration, transformElements, allSlides: true });
  };

  effectInit({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}

function swipers() {

  const ribbonSwiperAdvantages = () => {
    // const swiperRibbon = new Swiper('.swiper-ribbon--advantages', {
    //   speed: 8000,
    //   // slidesPerView: "2.3",
    //   slidesPerView: 'auto',
    //   spaceBetween: rem(3.2),
    //   loop: true,
    //   allowTouchMove: false,
    //   observer: true,
    //   observeParents: true,
    //   autoplay: {
    //     delay: 0,
    //     disableOnInteraction: false
    //   },
    //   breakpoints: {
    //     769: {
    //       slidesPerView: 'auto',
    //       speed: 15000
    //     }
    //   }
    // });
    $('.swiper-ribbon--advantages').marquee({
      duration: 50000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart: 0,
      gap: 0
    });
  };

  const ribbonSwiperContacts = () => {
    //     const swiperRibbon = new Swiper('.swiper-ribbon--contacts', {
    //       speed: 8000,
    //       // slidesPerView: "2.3",
    //       slidesPerView: 'auto',
    //       spaceBetween: rem(3.2),
    //       loop: true,
    //       // allowTouchMove: false,
    //       autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false
    //       },
    //       observer: true,
    // observeParents: true,
    //       breakpoints: {
    //         769: {
    //           slidesPerView: 'auto',
    //           speed: 5000
    //         }
    //       }
    //     });
    $('.swiper-ribbon--contacts').marquee({
      duration: 30000,
      startVisible: true,
      duplicated: true,
      delayBeforeStart: 0,
      gap: 0
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
      speed: 800,
      slidesPerView: '1',
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      grabCursor: true,
      spaceBetween: rem(3.2),
      loop: true,
      // allowTouchMove: false,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    });
  };

  const mockupSwiper = () => {
    const swiperEl = document.querySelector('.mockup__swiper-swiper');
    const swiper = new Swiper(swiperEl, {
      modules: [Autoplay, EffectCreativeMore],
      slidesPerView: 'auto',
      centeredSlides: true,
      speed: 600,
      loop: true,
      allowTouchMove: false,
      loopedSlides: 5,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },
      effect: 'creative',
      creativeEffect: {
        perspective: true,
        limitProgress: 5,
        progressMultiplierY: (progress) => {
          const radius = 2.5;
          return radius - Math.cos(((progress / 4) * Math.PI) / 2) * radius;
        },
        prev: {
          translate: ['-85%', '85%', -0],
          rotate: [0, 25, -5]
        },
        next: {
          translate: ['85%', '85%', -0],
          rotate: [0, -25, 5]
        }
      }
    });



    const swiperTitle = new Swiper('.mockup__swiper-title-swiper', {
      speed: 600,
      slidesPerView: '1',
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      allowTouchMove: false,
      // autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false
      // }
    });

    const swiperPrice = new Swiper('.mockup__swiper-price-swiper', {
      speed: 600,
      slidesPerView: '1',
      centeredSlides: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      allowTouchMove: false,
      // autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false
      // }
    });


    swiper.on('slideChange', () => {
      const index = swiper.realIndex;
      swiperTitle.slideToLoop(index);
      swiperPrice.slideToLoop(index);
    });
  };

  try {
    ribbonSwiperAdvantages();
  } catch {}
  try {
    ribbonSwiperContacts();
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
  try {
    mockupSwiper();
  } catch {}
}

export default swipers;

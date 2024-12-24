import { gsap, ScrollTrigger} from 'gsap/all';
function advantagesAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector('.advantages')
  const ribbon = document.querySelector('.advantages__ribbon')
  const cardWrapper = document.querySelector('.advantages__card-wrapper')
  const swiperBox = document.querySelector('.advantages__swiper-box')



  gsap.to(ribbon, {
    x: '-=30%',
    ease: 'ease-in-out',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom ',
        end: 'bottom top',
        scrub: 3,
        invalidateOnRefresh: !0
      },
  });
  gsap.to(cardWrapper, {
    // rotate: '+=30deg',
    rotate: '+=27deg',
    ease: 'ease-in',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom ',
        end: 'bottom top',
        scrub: 3,
        invalidateOnRefresh: !0
      },
  });
  gsap.to(swiperBox, {
    x: '-20rem',
    ease: 'ease-in',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom ',
        end: 'bottom top',
        scrub: 3,
      },
  });
}

export default advantagesAnim;

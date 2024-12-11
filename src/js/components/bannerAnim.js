import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function bannerAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const paralax = document.querySelector('.banner');
  const paralaxInner = document.querySelector('.banner .banner__wrapper');

  gsap.to(paralaxInner, {
    y: window.innerWidth > 768 ? '60vh' : '15vh',
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: paralax,
      start:  'top',
      end: 'bottom top',
      scrub: 0,
      invalidateOnRefresh: !0,
    }
  });
}

export default bannerAnim;

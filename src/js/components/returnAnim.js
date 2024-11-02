import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function returnAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const paralax = document.querySelector('.return');
  const paralaxInner = document.querySelector('.return__inner');


    gsap.to(paralaxInner, {

      y: window.innerWidth > 768 ? '55vh' : '15vh',
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

export default returnAnim;
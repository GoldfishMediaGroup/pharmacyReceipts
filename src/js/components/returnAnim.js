import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function returnAnim() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const paralax = document.querySelector('.return');


    const m = paralax.querySelector('.return__bg-box');
    const a = paralax.querySelector('.return__content-box');
    // gsap.set(m, { z: 0.1 });
    // gsap.set(a, { z: 0.2 });

    gsap.to([m, a], {
      y: window.innerWidth > 768 ? '50vh' : '15vh',
      ease: 'linear',
      scrollTrigger: {
        trigger: paralax,
        start:  'top 2rem',
        end: 'bottom top',
        scrub: !0,
        invalidateOnRefresh: !0,
      }
    });


}

export default returnAnim;
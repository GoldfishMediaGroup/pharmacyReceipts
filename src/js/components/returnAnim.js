import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function returnAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const paralax = document.querySelector('.return');
  const paralaxInner = document.querySelector('.return__inner');
  const paralaxVideo = document.querySelector('.return__video-box');


    gsap.to([paralaxInner,paralaxVideo], {

      y: window.innerWidth > 768 ? '55vh' : '15vh',
      ease: 'none',
      force3D: true,
      scrollTrigger: {
        trigger: paralax,
        start:   window.innerWidth > 768 ? '115%' : 'top',
        end: window.innerWidth > 768 ? '300% top' : 'bottom top' ,
        scrub: 0,
        invalidateOnRefresh: !0,
        // markers: true,
      }
    });

console.log(window.innerHeight);
}

export default returnAnim;
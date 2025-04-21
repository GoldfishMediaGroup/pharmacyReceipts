import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function howAnim() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const zSpacing = -1000;

  const frames = gsap.utils.toArray('.how__inner-frame');

  const titleBox = document.querySelector('.how__title-box');

  const bgBox = document.querySelector('.how__wrapper-desktop .how__bg-box');
  const bgBoxMob = document.querySelector('.how__wrapper-mobile .how__bg-box');

  const contentBox = document.querySelector('.how__content-box-desktop');
  const contentBoxMob = document.querySelector('.how__content-box-mobile');

  const section = document.querySelector('.how__anim-wrapper-desktop')

  frames.forEach((frame, i) => {
    gsap.set(frame, { z: i * zSpacing + zSpacing / 0.8, filter: 'blur(10px)' });
  });

  const tl = section && gsap.timeline({
    force3D: true,
    scrollTrigger: {
      trigger: section,
 
      start: 'top top',
      end: '+=4500',
      scrub: true,
      pin: true,
      pinSpacer: true,
      invalidateOnRefresh: !0,
      anticipatePin: 0,
      // anticipatePin: 1,
      pinType: 'fixed',
      immediatelyRender : false,

    },
    ease: 'power2.inOut'
  });



  tl.to(
    titleBox,
    {
      opacity: 0
      // duration: 0.4,
    }
    // '0'
  )
  .to(
    frames,
    {
      ease: 'linear',
      keyframes: {
        '0%': { filter: 'blur(10px)', rotationY: 0, opacity: 1 },
        '35%': { filter: 'blur(0px)', opacity: 1 },
        '40%': {
          z: -500,
          opacity: 1,
          filter: 'blur(0px)',
          // rotationY: (i) => (i % 2 === 0 ? 10 : -10),
          rotationY: (i) => (i === frames.length - 1 ? 0 : i % 2 === 0 ? 10 : -10),
          x: (i) => (i === frames.length - 1 ? i % 2 === 0 ? '27%' : '-27%'  : '0'),
     
        },
        '70%': {
          z: -500,
          opacity: 1,
          filter: 'blur(0px)',
          // rotationY: (i) => (i % 2 === 0 ? 10 : -10),
          rotationY: (i) => (i === frames.length - 1 ? 0 : i % 2 === 0 ? 10 : -10),
          x: (i) => (i === frames.length - 1 ? i % 2 === 0 ? '27%' : '-27%'  : '0'),
     
        },
        '100%': {
          opacity: (i) => (i === frames.length - 1 ? 1 : 0),
          z: (i) => (i === frames.length - 1 ? -500 : 1500),
 
        }
      },
      stagger: {
        amount: 1
      }
    }
    // '-0.2s'
  );

  gsap.to('.how__anim-wrapper-desktop-inner', {

    y: window.innerWidth > 768 ? '60vh' : '15vh',
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: '.how__anim-wrapper-desktop',
      start:  '10rem',
      end: 'bottom top',
      scrub: 0,
      invalidateOnRefresh: !0,
    }
  });
  gsap.to([bgBoxMob, contentBoxMob], {
    translateY: '10vh',
    ease: 'linear',
    force3D: true,
    scrollTrigger: {
      trigger: '.how__anim-wrapper-desktop',
      start:  '10rem',
      end: 'bottom top',
      scrub: 0,
      invalidateOnRefresh: !0,
    }
  });
}

export default howAnim;

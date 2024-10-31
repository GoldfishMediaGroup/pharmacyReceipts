import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function mockupAnim() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);


  const inner = document.querySelector('.mockup__inner')
  const columnWrapper = document.querySelector('.mockup__column-wrapper')

  const column1 = document.querySelector('.mockup__column1')
  const column2 = document.querySelector('.mockup__column2')
  const column3 = document.querySelector('.mockup__column3')
  const column4 = document.querySelector('.mockup__column4')
  const column5 = document.querySelector('.mockup__column5')

  const contentBox = document.querySelector('.mockup__content-box')


  let main = gsap.timeline({
    scrollTrigger: {
      trigger: inner,
      start: 'top',
      // end: '0% 0%',
      end: '+=2000',
      scrub: true,
      pin: true,
      pinSpacer: true,
      invalidateOnRefresh: !0, 
      // anticipatePin: 1,
      anticipatePin: 0,
    }
  });

  gsap.set(contentBox, {opacity: 0})
  // tl.set(inner, { z: 0.1 })

  main.to(columnWrapper, {
    transformOrigin: '30% 10%',
    transform: `translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 1) rotateX(0deg) rotateY(0deg) rotateZ(-20deg) skew(0deg, 0deg)`,
    duration: 10
  }, 0);

  main.to(column1, {
    transform: `translate3d(0px, -8%, 0px) `, duration: 10
  }, 0);

  main.to(column2, {
    transform: `translate3d(0px, -16%, 0px) `, duration: 10
  }, 0);

  main.to(column3, {
    transform: `translate3d(0px, -24%, 0px) `, duration: 10
  }, 0);

  main.to(column4, {
    transform: `translate3d(0px, -32%, 0px) `, duration: 10
  }, 0);

  main.to(column5, {
    transform: `translate3d(0px, -40%, 0px) `, duration: 10
  }, 0);

  main.to(contentBox, {
   opacity: 1
   , duration: 7
  }, 3);



    gsap.to([columnWrapper, contentBox], {
      y: window.innerWidth > 768 ? '80vh' : '15vh',
      ease: 'linear',
      scrollTrigger: {
        trigger: inner,
        start: '8rem',
        end: 'bottom top',
        scrub: !0,
        scrub: 0,
        invalidateOnRefresh: !0,
      }
    });
}

export default mockupAnim;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function mockupAnim2() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);


  const inner = document.querySelector('.mockup__inner')
  const innerWrapper = document.querySelector('.mockup__inner-wrapper')
  const columnWrapper = document.querySelector('.mockup__column-wrapper')

  const column1 = document.querySelector('.mockup__column--1')
  const column2 = document.querySelector('.mockup__column--2')
  const column3 = document.querySelector('.mockup__column--3')
  const column4 = document.querySelector('.mockup__column--4')
  const column5 = document.querySelector('.mockup__column--5')

  const contentBox = document.querySelector('.mockup__content-box')


  let main = inner && gsap.timeline({
    scrollTrigger: {
      trigger: inner,
      start: 'top',
      end: '+=2000',
      scrub: true,
      pin: true,
      pinSpacer: true,
      invalidateOnRefresh: !0, 
      // anticipatePin: 1,
      anticipatePin: 0,
         pinType: "fixed"
    }
  });

  contentBox && gsap.set(contentBox, {opacity: 0,  zIndex: -1,})


  main.to(contentBox, {
   opacity: 1,
   delay: 20,
   zIndex: 500,
    duration: 7
  }, 3);



  innerWrapper &&  gsap.to(innerWrapper, {
      y: window.innerWidth > 768 ? '60vh' : '15vh',
      ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: inner,
      start:  '10rem',
      end: 'bottom top',
      scrub: 0,
      invalidateOnRefresh: !0,
    }
    });
}

export default mockupAnim2;

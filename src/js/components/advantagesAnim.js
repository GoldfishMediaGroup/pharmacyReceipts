import { gsap, ScrollTrigger } from 'gsap/all';
function advantagesAnim() {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector('.advantages');
  const ribbon = document.querySelector('.advantages__ribbon');
  const cardWrapper = document.querySelector('.advantages__card-wrapper');
  const swiperBox = document.querySelector('.advantages__swiper-box');


  const tl = section && gsap.timeline({
    force3D: true,
    scrollTrigger: {
      trigger: '.advantages',
      start: '37% top',
      // end: 'bottom',
      end: '+=1000',
  
      // end: window.innerWidth > 768 ? '+=1000' : 'bottom',
      scrub: 3,
      pin: window.innerWidth > 768 ? true : false,
      // pinSpacer: true,
      invalidateOnRefresh: !0,
      anticipatePin: 0,
      // anticipatePin: 1,
      pinType: 'fixed',
      immediatelyRender: false
    },
    ease: 'power2.inOut'
  });

  tl.to(cardWrapper, {
    // rotate: '+=30deg',
    rotate: '-=20deg',
    duration: 3,
    ease: 'ease-in'
  });

  gsap.to(ribbon, {
    x: '-=30%',
    ease: 'ease-in-out',
    scrollTrigger: {
      trigger: section,
      start: 'top bottom ',
      end: 'bottom top',
      scrub: 3,
      invalidateOnRefresh: !0
    }
  });

  gsap.to(swiperBox, {
    x: '-20rem',
    ease: 'ease-in',
    scrollTrigger: {
      trigger: section,
      start: 'top bottom ',
      end: 'bottom top',
      scrub: 3
    }
  });


  // let isDragging = false;
  // let startX = 0;
  // let currentRotation = 0;

  // cardWrapper.addEventListener("mousedown", (e) => {
  //   isDragging = true;
  //   startX = e.clientX;
  //   currentRotation = gsap.getProperty(cardWrapper, "rotate"); // Берём текущий угол
  // });

  // document.addEventListener("mousemove", (e) => {
  //   if (!isDragging) return;

  //   let deltaX = e.clientX - startX;
  //   let newRotation = currentRotation + deltaX * 0.01; // Чем больше 0.2, тем чувствительнее

  //   gsap.to(cardWrapper, { rotate: newRotation, duration: 0.1, ease: "none" });
  // });

  // document.addEventListener("mouseup", () => {
  //   isDragging = false;
  // });
}

export default advantagesAnim;

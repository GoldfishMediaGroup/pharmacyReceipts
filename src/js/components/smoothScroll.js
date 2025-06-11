import Lenis from '@studio-freight/lenis';

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
export let lenis;
function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // lenis = new Lenis();
  // //   {
  // //   smooth: true,
  // //   duration: 0.5, // Длительность скролла
  // //   easing: (t) => t, // Функция easing для плавности
  // //   direction: 'vertical' // Вертикальный или горизонтальный скролл
  // // }

  // lenis.on('scroll', ScrollTrigger.update);

  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000);
  // });

  // gsap.ticker.lagSmoothing(0);

  // Function to initialize Lenis
  function initializeLenis() {
    let lenis = new Lenis({
      duration: 6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(4, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: true,
      syncTouch: true,
      syncTouchLerp: 0.015,
      touchInertiaMultiplier: 18,
      infinite: false,
      autoResize: true,
      // autoToggle: true,
      // overscroll: false,
      // allowNestedScroll:  true,
      // prevent: (node) => {
      //   node.classList.contains('header');
      // }
    });

    lenis.on('scroll', (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    gsap.ticker.lagSmoothing(0);
  }

  // Check screen width on initial load
  initializeLenis();
}
// Add event listener for when user resizes
// window.addEventListener('resize', checkScreenWidthAndInitialize);
// }
export default smoothScroll;

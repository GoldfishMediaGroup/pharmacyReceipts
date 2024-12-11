import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function trustBlocks() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const trust = document.querySelector('.trust');

  const container = document.querySelector('.trust .container');

  const inner = document.querySelector('.trust__inner');

  const tlInner = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top',
      end: '+=2200',
      pin: true,
      scrub: !0,
      pinSpacer: true,
      invalidateOnRefresh: !0,
      // anticipatePin: 0,
      anticipatePin: 0.5,
      pinType: 'fixed'
    },
    ease: 'linear'
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trust,
      start: 'top ',
      end: '+=1000'
    }
  });

  tl.from('.trust__billet', {
    duration: 0.8,
    ease: 'power2.Out',
    y: window.innerWidth > 768 ? '-=110rem' : '-180rem',
    stagger: {
      amount: 0.2,
      from: 'end'
    }
  });

  gsap.to(inner, {
    y: window.innerWidth > 768 ? '60vh' : '15vh',
    ease: 'none',
    force3D: true,
    scrollTrigger: {
      trigger: container,
      start: '10rem',
      end: 'bottom top',

      scrub: 0,
      invalidateOnRefresh: !0
    }
  });
}

{
  // const vertex = document.querySelector('.trust__billet--vertex');
  // const ranbaxy = document.querySelector('.trust__billet--ranbaxy');
  // const valenta = document.querySelector('.trust__billet--valenta');
  // const haleon = document.querySelector('.trust__billet--haleon');
  // const drtheiss = document.querySelector('.trust__billet--drtheiss');
  // const petrovax = document.querySelector('.trust__billet--petrovax');
  // const grindex = document.querySelector('.trust__billet--grindex');
  // const zambon = document.querySelector('.trust__billet--zambon');
  // const sandoz = document.querySelector('.trust__billet--sandoz');
  // const galderma = document.querySelector('.trust__billet--galderma');
  // const reckitt = document.querySelector('.trust__billet--reckitt');
  // const krka = document.querySelector('.trust__billet--krka');
  // const billets = document.querySelectorAll('.trust__billet');
  // if (window.innerWidth > 768) {
  //   tl.from(krka, {
  //     duration: 1.5,
  //     ease: 'power2.in',
  //     y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //   });
  // }
  // tl.from(
  //   reckitt,
  //   {
  //     duration: 1.5,
  //     ease: 'power2.in',
  //     y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //   },
  //   '-=1.5'
  // )
  //   .from(
  //     galderma,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.4'
  //     // '-=1.4'
  //   )
  //   .from(
  //     sandoz,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.4'
  //     // '-=1.3'
  //   )
  //   .from(
  //     zambon,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.42'
  //     // '-=1.2'
  //   )
  //   .from(
  //     grindex,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.42'
  //   )
  //   .from(
  //     petrovax,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.44'
  //   )
  //   .from(
  //     drtheiss,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.44'
  //   )
  //   .from(
  //     haleon,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.46'
  //   )
  //   .from(
  //     valenta,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.46'
  //   )
  //   .from(
  //     ranbaxy,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.48'
  //   )
  //   .from(
  //     vertex,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.48'
  //   );
  // if (window.innerWidth < 768) {
  //   tl.from(
  //     krka,
  //     {
  //       duration: 1.5,
  //       ease: 'power2.in',
  //       y: window.innerWidth > 768 ? '-110rem' : '-180rem'
  //     },
  //     '-=1.46'
  //   );
  // }
}

export default trustBlocks;

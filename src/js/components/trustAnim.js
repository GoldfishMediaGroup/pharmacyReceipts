import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

function trustBlocks() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  const trust = document.querySelector('.trust');

  const vertex = document.querySelector('.trust__billet--vertex');
  const ranbaxy = document.querySelector('.trust__billet--ranbaxy');
  const valenta = document.querySelector('.trust__billet--valenta');
  const haleon = document.querySelector('.trust__billet--haleon');
  const drtheiss = document.querySelector('.trust__billet--drtheiss');
  const petrovax = document.querySelector('.trust__billet--petrovax');
  const grindex = document.querySelector('.trust__billet--grindex');
  const zambon = document.querySelector('.trust__billet--zambon');
  const sandoz = document.querySelector('.trust__billet--sandoz');
  const galderma = document.querySelector('.trust__billet--galderma');
  const reckitt = document.querySelector('.trust__billet--reckitt');
  const krka = document.querySelector('.trust__billet--krka');

  const billets = document.querySelectorAll('.trust__billet');

  const container = document.querySelector('.trust .container');

  const inner = document.querySelector('.trust__inner')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trust,
      start: 'top ',
      end: 'bottom'
    }
  });

  const tlInner = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'top',
      end: '+=1000',
      pin: true,
      scrub: !0,
      pinSpacer: true,
      invalidateOnRefresh: !0,
      // anticipatePin: 0,
      anticipatePin: 0.5,
      pinType: "fixed"
    },
    ease: 'linear'
  });

  if (window.innerWidth > 768) {
    tl.from(krka, {
      duration: 1.5,
      ease: 'power2.in',
      y: window.innerWidth > 768 ? '-110rem' : '-180rem'
    });
  }
  tl.from(
    reckitt,
    {
      duration: 1.5,
      ease: 'power2.in',
      y: window.innerWidth > 768 ? '-110rem' : '-180rem'
    },
    '-=1.5'
  )
    .from(
      galderma,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.4'
      // '-=1.4'
    )
    .from(
      sandoz,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.4'
      // '-=1.3'
    )
    .from(
      zambon,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.42'
      // '-=1.2'
    )
    .from(
      grindex,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.42'
    )

    .from(
      petrovax,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.44'
    )
    .from(
      drtheiss,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.44'
    )

    .from(
      haleon,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.46'
    )
    .from(
      valenta,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.46'
    )
    .from(
      ranbaxy,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.48'
    )
    .from(
      vertex,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.48'
    );

  if (window.innerWidth < 768) {
    tl.from(
      krka,
      {
        duration: 1.5,
        ease: 'power2.in',
        y: window.innerWidth > 768 ? '-110rem' : '-180rem'
      },
      '-=1.46'
    );
  }

  const m = trust.querySelector('.trust__bg-box');
  const a = trust.querySelector('.trust__content-wrapper');
  // gsap.set(m, { z: 0.1 });
  // gsap.set(a, { z: 0.2 });

  gsap.to([m, a], {
    y: window.innerWidth > 768 ? '50vh' : '15vh',
    ease: 'linear',
    scrollTrigger: {
      trigger: container,
      start: '8rem',
      end: 'bottom top',
      scrub: !0,
      invalidateOnRefresh: !0,

    } ,   ease: 'linear'
  });
}

export default trustBlocks;

// gsap.set(trust, { z: 0.1 });
// gsap.set(billets, { y: window.innerWidth > 768 ? '-110rem' : '-180rem' });

// tl.from(krka, {
//   duration: 1.5,
//   ease: 'power2.inOut',
//   keyframes: {
//     '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate:window.innerWidth > 768  ? '25deg' : '-62deg'  },
//     '100%': { y: '4rem', rotate: window.innerWidth > 768  ? '18deg' : '-57deg'  },
//     // '100%': { y: '0', rotate: '11deg' }
//   }
// }).from(
//   reckitt,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-28deg' },
//       '100%': { y: '4rem', rotate: '-15deg' },
//       // '100%': { y: '0', rotate: '-5deg' }
//     }
//   },
//   '-=1.5'
// ).from(
//   galderma,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '50deg' },
//       '100%': { y: '4rem', rotate: '25deg' },
//       // '100%': { y: '0', rotate: '36deg' }
//     }
//   },
//   '-=1.49'
// )
// .from(
//   sandoz,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '23deg' },
//       '100%': { y: '4rem', rotate: '19deg' },
//       // '100%': { y: '0', rotate: '8deg' }
//     }
//   },
//   '-=1.49'
// )
// .from(
//   zambon,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '38deg' },
//       '100%': { y: '4rem', rotate: '26deg' },
//       // '100%': { y: '0', rotate: '12deg' }
//     }
//   },
//   '-=1.48'
// ).from(
//   grindex,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-24deg' },
//       '100%': { y: '4rem', rotate: '-19deg' },
//       // '100%': { y: '0', rotate: '-6deg' }
//     }
//   },
//   '-=1.48'
// )

// .from(
//   petrovax,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-18deg' },
//       '100%': { y: '4rem', rotate: '-12deg' },
//       // '100%': { y: '0', rotate: '-4deg' }
//     }
//   },
//   '-=1.47'
// )
// .from(
//   drtheiss,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-48deg' },
//       '100%': { y: '4rem', rotate: '-36deg' },
//       // '100%': { y: '0', rotate: '-22deg' }
//     }
//   },
//   '-=1.47'
// )

// .from(
//   haleon,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-24deg' },
//       '100%': { y: '4rem', rotate: '16deg' },
//       // '100%': { y: '0', rotate: '4deg' }
//     }
//   },
//   '-=1.46'
// )
// .from(
//   valenta,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-54deg' },
//       '100%': { y: '4rem', rotate: '-33deg' },
//       // '100%': { y: '0', rotate: '-16deg' }
//     }
//   },
//   '-=1.46'
// ).from(
//   ranbaxy,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '67deg' },
//       '100%': { y: '4rem', rotate: '46deg' },
//       // '100%': { y: '0', rotate: '28deg' }
//     }
//   },
//   '-=1.45'
// ).from(
//   vertex,
//   {
//     duration: 1.5,
//     ease: 'power2.inOut',
//     keyframes: {
//       '0%': { y: window.innerWidth > 768  ? '-110rem' : '-180rem', rotate: '-42deg' },
//       '100%': { y: '4rem', rotate: '-27deg' },
//       // '100%': { y: '0', rotate: '-9deg' }
//     }
//   },
//   '-=1.45'
// )

// .to(krka, {
//   duration: 0.6,
//   ease: 'power2.inOut',

//   y: '0', rotate: window.innerWidth > 768  ? '11deg' : '-48deg'

// })
// .to(
//   reckitt,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',

//      y: '0',  rotate: window.innerWidth > 768  ? '-6deg' : '32deg'

//   },
//   '-=0.6'
// ).to(
//   galderma,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',

//      y: '0', rotate: window.innerWidth > 768  ? '36deg' : '17deg'

//   },
//     '-=0.6'
// )
// .to(
//   sandoz,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',

//     y: '0', rotate: '8deg'

//   },
//     '-=0.6'
// )
// .to(
//   zambon,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',

//     y: '0', rotate: window.innerWidth > 768  ? '12deg' : '7deg'

//   },
//   '-=0.6'
// ).to(
//   grindex,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',

//      y: '0', rotate: '-6deg'

//   },
//    '-=0.6'
// )

// .to(
//   petrovax,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//    y: '0', rotate: '-4deg'
//   },
//   '-=0.6'
// )
// .to(
//   drtheiss,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//     y: '0', rotate: '-22deg'
//   },
//  '-=0.6'
// )

// .to(
//   haleon,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//     y: '0', rotate: '4deg'
//   },
//     '-=0.6'
// )
// .to(
//   valenta,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//      y: '0', rotate: '-16deg'
//   },
//   '-=0.6'
// ).to(
//   ranbaxy,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//    y: '0', rotate: '28deg'
//   },
//    '-=0.6'
// ).to(
//   vertex,
//   {
//     duration: 0.6,
//     ease: 'power2.inOut',
//      y: '0', rotate: '-9deg'
//   },
//  '-=0.6'
// )

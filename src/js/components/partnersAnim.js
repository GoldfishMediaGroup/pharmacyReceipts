import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';

// function partnersAmim() {
//   const cube = document.querySelectorAll('.partners__anim-item-images');

//   cube.forEach((item, index) => {
//     const proxy = { yr: 0, xr: 0, zr: 0 };
//     const isEven = index % 2 === 0;
//     const rotateY = isEven ? -90 : 90;
//     const rotateX = isEven ? -90 : 90;
//     const imgTransform = `rotate(${rotateY}deg)${isEven ? '' : ' scaleY(-1) scaleX(-1)'}`;

//     const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

//     const updateVars = () => {
//       item.style.setProperty('--xr', `${proxy.xr}deg`);
//       item.style.setProperty('--yr', `${proxy.yr}deg`);
//       item.style.setProperty('--zr', `${proxy.zr}deg`);
//     };

//     tl.to(proxy, {
//       zr: 0,
//       xr: 0,
//       yr: rotateY,
//       duration: 0.3,
//       ease: 'power2.inOut',
//       onUpdate: updateVars,
//       onStart: () => {
//         item.querySelector('.partners__anim-item--front img').style.transform = 'rotate(0deg)';
//       }
//     })
//       .to(proxy, {
//         xr: rotateX,
//         duration: 0.3,
//         ease: 'power2.inOut',
//         delay: 0.8,
//         onUpdate: updateVars,
//         onComplete: () => {
//           item.querySelector('.partners__anim-item--front img').style.transform = imgTransform;
//         }
//       })
//       .to(proxy, {
//         zr: 90,
//         duration: 0.3,
//         delay: 0.8,
//         ease: 'power2.inOut',
//         onUpdate: updateVars
//       });
//   });

// }

function partnersAmim() {
  const cube = document.querySelectorAll('.partners__anim-item-images');

  cube.forEach((item, index) => {
    const proxy = { yr: 0, xr: 0, zr: 0 };
    const isEven = index % 2 === 0;
    const rotateY = isEven ? -90 : 90;
    const rotateX = isEven ? -90 : 90;
    const imgTransform = `rotate(${rotateY}deg)${isEven ? '' : ' scaleY(-1) scaleX(-1)'}`;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8, yoyo: true });

    const updateVars = () => {
      item.style.setProperty('--xr', `${proxy.xr}deg`);
      item.style.setProperty('--yr', `${proxy.yr}deg`);
      item.style.setProperty('--zr', `${proxy.zr}deg`);
    };

    tl.to(proxy, {
      zr: 0,
      xr: 0,
      yr: rotateY,
      duration:  window.innerWidth > 768 ? 0.8 : 0.3,
      ease: 'power2.inOut',
      onUpdate: updateVars,

    })
      .to(proxy, {
        xr: rotateX,
        duration:  window.innerWidth > 768 ? 0.8 : 0.3,
        ease: 'power2.inOut',
        delay: 0.8,
        onUpdate: updateVars,
      })

  });
}

export default partnersAmim;

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import { watchViewport } from 'tornis';

import Matter from '../libs/matter';

window.$ = window.jQuery = require('jquery');

function trustBlocks() {
  // let Engine = Matter.Engine,
  //   Render = Matter.Render,
  //   Body = Matter.Body,

  //   World = Matter.World,
  //   Bodies = Matter.Bodies;
  // let engine, world, render;
  // let containerImg = document.querySelector('.trust__matterJs-box'); // Получаем контейнер
  // function matterBillet() {
  //   function init() {
  //     if (!containerImg) return;

  //     $('.trust__matterJs-box canvas').remove(); // Удаляем старый canvas
  //     let width = $(window).width();
  //     let height = $(window).height();

  //     // Параметры для масштабирования
  //     let scaleX = window.innerWidth > 768 ? width / 2200 : width / 1350; // для ширины
  //     let scaleY = window.innerWidth > 768 ? width / 2200 : width / 1350; // Для высоты экрана

  //     // Если уже есть движок — удаляем его перед созданием нового
  //     if (engine) {
  //       World.clear(engine.world); // Очищаем мир
  //       Engine.clear(engine); // Очищаем движок
  //       render.canvas.remove(); // Удаляем старый canvas
  //       render.textures = {}; // Очищаем текстуры
  //     }

  //     // Создание физического движка
  //     engine = Engine.create();
  //     world = engine.world;
  //     world.gravity.y = window.innerWidth > 768 ? 3 : 2;
  //     // Создание рендерера
  //     render = Render.create({
  //       element: containerImg,
  //       engine: engine,
  //       options: {
  //         width: width,
  //         height: height,
  //         pixelRatio: 2,
  //         background: 'transparent',
  //         wireframes: false
  //       }
  //     });

  //     // Создание границ сцены
  //     let roof = Bodies.rectangle(width / 2, 0, width, 10, { render: { fillStyle: 'transparent' }, isStatic: true });
  //     let wallLeft = Bodies.rectangle(window.innerWidth > 768 ? width / 1.95 : 0, height / 2, 10, height, {
  //       render: { fillStyle: 'transparent' },
  //       isStatic: true
  //     });
  //     let wallRight = Bodies.rectangle(width, height / 2, 10, height, { render: { fillStyle: 'transparent' }, isStatic: true });
  //     let ground = Bodies.rectangle(width / 2, window.innerWidth > 768 ? height : height - 30, width, 10, {
  //       render: { fillStyle: 'transparent' },
  //       isStatic: true
  //     });

  //     // Создание объекта krka

  //     let empty = Bodies.rectangle(650 * (width / 1000), 0, 150, 50 * scaleY, {
  //       angle: 13 * (Math.PI / 180), // Задаём угол сразу
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           // texture: './assets/images/krka.webp',
  //           xScale: 0.4 * scaleX, // Масштабируем текстуру пропорционально
  //           yScale: 0.4 * scaleY // Масштабируем текстуру пропорционально
  //         }
  //       }
  //     });
  //     let krka = Bodies.rectangle(700 * (width / 1000), 0, 400 * scaleX, 160 * scaleY, {
  //       angle: 13 * (Math.PI / 180), // Задаём угол сразу
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/krka.webp',
  //           xScale: 0.4 * scaleX, // Масштабируем текстуру пропорционально
  //           yScale: 0.4 * scaleY // Масштабируем текстуру пропорционально
  //         }
  //       }
  //     });

  //     // Создание других объектов (reckitt, sandoz и т.д.)
  //     let reckitt = Bodies.rectangle(640 * (width / 1000), -180, 520 * scaleX, 160 * scaleY, {
  //       angle: -30 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         // fillStyle: 'black',
  //         sprite: {
  //           texture: './assets/images/reckitt.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let sandoz = Bodies.rectangle(720 * (width / 1000), -600, 550 * scaleX, 160 * scaleY, {
  //       angle: -35 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/sandoz.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let galderma = Bodies.rectangle(880 * (width / 1000), -200, 480 * scaleX, 160 * scaleY, {
  //       angle: 35 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/galderma.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let valenta = Bodies.rectangle(830 * (width / 1000), -400, 350 * scaleX, 120 * scaleY, {
  //       angle: 35 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/valenta.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let grindex = Bodies.rectangle(825 * (width / 1000), -650, 340 * scaleX, 160 * scaleY, {
  //       angle: -30 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/grindex.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let zambon = Bodies.rectangle(890 * (width / 1000), -1200, 390 * scaleX, 245 * scaleY, {
  //       angle: 40 * (Math.PI / 180),

  //       chamfer: { radius: 50 },
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/zambon.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let petrovax = Bodies.rectangle(652 * (width / 1000), -1200, 350 * scaleX, 160 * scaleY, {
  //       angle: -17 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/petrovax.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let drtheiss = Bodies.rectangle(740 * (width / 1000), -1400, 450 * scaleX, 160 * scaleY, {
  //       angle: 15 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/drtheiss.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let ranbaxy = Bodies.rectangle(910 * (width / 1000), -2000, 450 * scaleX, 160 * scaleY, {
  //       angle: -31 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/ranbaxy.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let haleon = Bodies.rectangle(800 * (width / 1000), -2000, 450 * scaleX, 160 * scaleY, {
  //       angle: -11 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/haleon.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     let vertex = Bodies.rectangle(710 * (width / 1000), -2500, 500 * scaleX, 160 * scaleY, {
  //       // angle: 15 * (Math.PI / 180),
  //       render: {
  //         // Толщина границы
  //         sprite: {
  //           texture: './assets/images/vertex.webp',
  //           xScale: 0.4 * scaleX,
  //           yScale: 0.4 * scaleY
  //         }
  //       }
  //     });

  //     Body.setVelocity(vertex, { x: 0, y: 5 });

  //     // Добавление объектов в мир
  //     World.add(world, [
  //       // empty,
  //       krka,
  //       reckitt,
  //       sandoz,
  //       galderma,
  //       valenta,
  //       grindex,
  //       zambon,
  //       petrovax,
  //       drtheiss,
  //       ranbaxy,
  //       haleon,
  //       vertex,

  //       ground,
  //       wallLeft,
  //       wallRight
  //     ]);

  //     // Запуск движка и рендера
  //     Render.run(render);
  //   }

  //   // Инициализация
  //   init();
  //   // Engine.run(engine);
  //   // Запуск при изменении размера окна
  //   window.addEventListener('resize', init);
  // }
  // matterBillet();

  // gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollToPlugin);

  // const trust = document.querySelector('.trust');

  // const inner = document.querySelector('.trust__inner');
  // const container = document.querySelector('.trust .container');

  // const tlInner = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: container,
  //     start: 'top',
  //     end: '+=2200',
  //     pin: true,
  //     scrub: !0,
  //     pinSpacer: true,
  //     invalidateOnRefresh: !0,
  //     // anticipatePin: 0,
  //     anticipatePin: 0.5,
  //     pinType: 'fixed'
  //   },
  //   ease: 'linear'
  // });

  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: trust,
  //     start: 'top ',
  //     end: '+=1000'
  //   }
  // });

  // const tlBillet = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: trust,
  //     start: 'top 60rem ',
  //     onEnter: () => {
  //       Engine.run(engine);
  //     }
  //   }
  // });

  // tl.from('.trust__billet', {
  //   duration: 0.8,
  //   ease: 'power2.Out',
  //   y: window.innerWidth > 768 ? '-=110rem' : '-180rem',
  //   stagger: {
  //     amount: 0.2,
  //     from: 'end'
  //   }
  // });

  // gsap.to([inner, containerImg], {
  //   y: window.innerWidth > 768 ? '60vh' : '15vh',
  //   ease: 'none',
  //   force3D: true,
  //   scrollTrigger: {
  //     trigger: container,
  //     start: '10rem',
  //     end: 'bottom top',

  //     scrub: 0,
  //     invalidateOnRefresh: !0
  //   }
  // });
}

{
  // let Engine = Matter.Engine,
  //   Render = Matter.Render,
  //   Events = Matter.Events,
  //   MouseConstraint = Matter.MouseConstraint,
  //   Mouse = Matter.Mouse,
  //   World = Matter.World,
  //   Bodies = Matter.Bodies;
  // let engine, world, render;
  // let containerImg = document.querySelector('.trust__matterJs-box');
  // function init() {
  //   if (!containerImg) return;
  //   $('.trust__matterJs-box canvas').remove(); // Удаляем старый canvas
  //   // Если уже есть движок — удаляем его перед созданием нового
  //   if (engine) {
  //     World.clear(engine.world); // Очищаем мир
  //     Engine.clear(engine); // Очищаем движок
  //     render.canvas.remove(); // Удаляем старый canvas
  //     render.textures = {}; // Очищаем текстуры
  //   }
  //   let { width, height } = containerImg.getBoundingClientRect();
  //   // Создание объектов
  //   let scaleX = window.innerWidth / 4000;
  //   let scaleY = window.innerHeight / 4000;
  //   // Создание физического движка
  //   engine = Engine.create();
  //   world = engine.world;
  //   // Создание рендерера
  //   render = Render.create({
  //     element: containerImg,
  //     engine: engine,
  //     options: {
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //       pixelRatio: 2,
  //       background: 'transparent',
  //       wireframes: false
  //     }
  //   });
  //   // Создание границ сцены
  //   var ground = Bodies.rectangle(window.innerWidth / 2 + 150, window.innerHeight + 80, window.innerWidth + 320, 160, {
  //     render: { fillStyle: '#080808' },
  //     isStatic: true
  //   });
  //   var wallLeft = Bodies.rectangle(-80, window.innerHeight / 2, 160, window.innerHeight, {render: { fillStyle: '#080808' } ,isStatic: true });
  //   var wallRight = Bodies.rectangle(window.innerWidth + 80, window.innerHeight / 2, 160, 1200, { render: { fillStyle: '#080808' },isStatic: true });
  //   var roof = Bodies.rectangle(window.innerWidth / 2 + 160, -80, window.innerWidth + 320, 160, {render: { fillStyle: '#080808' }, isStatic: true });
  //   // Создание объекта с углом сразу
  //   let krka = Bodies.rectangle(853 * (width / 1000), 80 * (height / 500), 397 * scaleX, 139 * scaleY, {
  //     angle: 11 * (Math.PI / 180), // Задаём угол сразу
  //     render: {
  //       sprite: {
  //         texture: './assets/images/krka.webp',
  //         xScale: 0.5 * scaleX, // Масштабируем текстуру пропорционально
  //         yScale: 0.5 * scaleY // Масштабируем текстуру пропорционально
  //       }
  //     }
  //   });
  //   // Добавление объектов в мир
  //   World.add(world, [krka, ground, wallLeft, wallRight, roof]);
  //   // Запуск движка и рендера
  //   Engine.run(engine);
  //   Render.run(render);
  // }
  // // Инициализация
  // init();
  // window.addEventListener('resize', init);
}

{
  // //const vertex = document.querySelector('.trust__billet--vertex');//
  // // const ranbaxy = document.querySelector('.trust__billet--ranbaxy');//
  // // const valenta = document.querySelector('.trust__billet--valenta');
  // //const haleon = document.querySelector('.trust__billet--haleon');//
  // //const drtheiss = document.querySelector('.trust__billet--drtheiss');//
  // // const petrovax = document.querySelector('.trust__billet--petrovax');
  // // const grindex = document.querySelector('.trust__billet--grindex');
  // //const zambon = document.querySelector('.trust__billet--zambon');//
  // // const sandoz = document.querySelector('.trust__billet--sandoz');
  // // const galderma = document.querySelector('.trust__billet--galderma');
  // //const reckitt = document.querySelector('.trust__billet--reckitt');//
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

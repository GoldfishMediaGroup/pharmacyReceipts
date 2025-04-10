import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import scroll from '../utils/scroll';

import headerScroll from '../components/headerScroll';
import headerBurger from '../components/headerBurger';
import bannerBestBtn from '../components/bannerBestBtn';
import bannerAnim from '../components/bannerAnim';
import returnAnim from '../components/returnAnim';
import swipers from '../components/swipers';
import advantagesAnim from '../components/advantagesAnim';
import howAnim from '../components/howAnim';
// import trustAnim from '../components/trustAnim';
// import mockupAnim from '../components/mockupAnim';
import mockupAnim2 from '../components/mockupAnim2';
import questionsTabs from '../components/questionsTabs';
import scrollTopBtn from '../components/scrollTopBtn';
import smoothScroll from '../components/smoothScroll';
import partnersAmim from '../components/partnersAnim';
import footer from '../components/footer';

export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    scroll();
  } catch {}
  try {
    headerScroll();
  } catch {}
  try {
    headerBurger();
  } catch {}
  try {
    bannerBestBtn();
  } catch {}
  try {
    bannerAnim();
  } catch {}
  try {
    returnAnim();
  } catch {}
  try {
    swipers();
  } catch {}
  try {
    advantagesAnim();
  } catch {}
  try {
    howAnim();
  } catch {}
  // try {
  //   trustAnim();
  // } catch {}
  // try {
  //   // mockupAnim();
  // } catch {}
  try {
    mockupAnim2();
  } catch {}
  try {
    questionsTabs();
  } catch {}
  try {
    scrollTopBtn();
  } catch {}
  try {
    if (innerWidth > 767) {
      smoothScroll();
    }
  } catch {}
  try {
    footer();
  } catch {}
  try {
    partnersAmim();
  } catch {}
});

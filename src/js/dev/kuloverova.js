import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
import 'animate.css';
import WOW from 'wow.js';
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
import trustAnim from '../components/trustAnim';
import mockupAnim from '../components/mockupAnim';
import questionsTabs from '../components/questionsTabs';
import scrollTopBtn from '../components/scrollTopBtn';

export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);
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
  try {
    trustAnim();
  } catch {}
  try {
    mockupAnim();
  } catch {}
  try {
    questionsTabs();
  } catch {}
  try {
    scrollTopBtn();
  } catch {}
});

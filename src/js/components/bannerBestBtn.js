import { gsap, ScrollTrigger} from 'gsap/all';

function bannerBestBtn() {
  gsap.registerPlugin(ScrollTrigger);

  const btn = document.querySelector('.banner__best-btn');
  const rotateText = document.querySelector('.banner__best-btn-svg-box-rotate');
  
  
  btn.addEventListener('mouseenter', function () {
    gsap.to(rotateText, {
      rotation: '+=360',
      duration: 8,
      ease: 'linear',
      repeat: -1
    });
  });

  btn.addEventListener('mouseleave', function () {
    gsap.to(rotateText, {
      rotation: gsap.getProperty(rotateText, 'rotation'),
      duration: 0,
      overwrite: true
    });
  });

  function setDataAttrModal() {
    if (window.innerWidth < 768) {
      btn.dataset.popup = '#popup__best';
    } else {
     btn.dataset.popup = '';
    }
  }
  setDataAttrModal();
  window.addEventListener('resize', () => {
    setDataAttrModal();
  });
}

export default bannerBestBtn;

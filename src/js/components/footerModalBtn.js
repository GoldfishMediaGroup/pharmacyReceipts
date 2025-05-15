

function footerModalBtn() {
  const btns = document.querySelectorAll('.footer__bottom-btn');

  function setDataAttrModal() {
    if (window.innerWidth < 768) {
      btns.forEach((btn) => {
        btn.dataset.popup = '#popup__storage';
      });
    } else {
      btns.forEach((btn) => {
        btn.dataset.popup = '';
      });
    }
  }
  setDataAttrModal();
  window.addEventListener('resize', () => {
    setDataAttrModal();
  });
}

export default footerModalBtn;

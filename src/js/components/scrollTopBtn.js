function scrollTopBtn () {

    function scrollTopBtnFn() {
        const topBtn = document.querySelector('.scroll-top');
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const docHeight = document.body.offsetHeight;
      
        const fromTop = 100;
        const fromBottom = window.innerWidth > 768 ? 500 : 700;
      
        if (scrollPosition >= fromTop) {
          topBtn.classList.add('isShow');
        } else {
          topBtn.classList.remove('isShow');
        }
      
        if (windowHeight + scrollPosition >= docHeight - fromBottom) {
          topBtn.classList.remove('isShow');
        }
      }

      scrollTopBtnFn();
      window.addEventListener('scroll', scrollTopBtnFn);
      window.addEventListener('resize', scrollTopBtnFn);
} 

export default scrollTopBtn
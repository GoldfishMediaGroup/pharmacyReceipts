
function headerScroll () {
    const nav = document.querySelector('header');
    const navOffsetTop = nav.offsetTop;
  

    function handleScroll() {
      if (window.scrollY > navOffsetTop) {
        nav.classList.add('fixed-nav');
      } else {
        nav.classList.remove('fixed-nav');
      }
    }
    
    function handleResize() {
      window.addEventListener('scroll', handleScroll);
    }

    if (nav) {
      handleResize();
    }

    
    


}





export default headerScroll
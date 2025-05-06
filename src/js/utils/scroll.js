 function scroll() {
    const anchors = document.querySelectorAll(`.nav-link`);
  
    for (let anchor of anchors) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    }
    const anchorsEnd = document.querySelectorAll(`.nav-link-end`);
  


    for (let anchor of anchorsEnd) {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'end'
        });
      });
    }
  }

  export default scroll 
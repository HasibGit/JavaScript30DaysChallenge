// jshint esversion : 6
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkScroll(e){
    sliderImages.forEach(image => {
          // half way through the image
          const scrollInAt = (window.scrollY + window.innerHeight) - (image.height/2);
          // have we scrolled upto the middle of the image
          const halfWayShown = scrollInAt > image.offsetTop;

          const imageBottom = image.offsetTop + image.height;

          const isNotScrolledPast = window.scrollY < imageBottom;

          if(halfWayShown && isNotScrolledPast){
            image.classList.add('active');
          }else{
            image.classList.remove('active');
          }

    });
  }

  window.addEventListener('scroll', debounce(checkScroll));

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
  
    video.currentTime = 0;
    video.pause();
  }
  
  const arrowBtnLeft = document.querySelector(".btn-arrow-left");
  const arrowBtnRight = document.querySelector(".btn-arrow-right");
  
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  
  let curSlide = 0;
  
  // functions
  const goToSlide = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  
  const nextSlide = function () {
    curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  
  const prevSlide = function () {
    curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  
  const createDots = () => {
    slides.forEach((_, i) =>
      dotsContainer.insertAdjacentHTML(
        "beforeend",
        `<button class='dot' data-slide='${i}'></button>`
      )
    );
  };
  
  const activateDot = (slide) => {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("dot--active"));
    document
      .querySelectorAll(`.dot[data-slide="${slide}"]`)
      .forEach((dot) => dot.classList.add("dot--active"));
  };
  
  // inital
  const init = () => {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();
  
  // event listeners
  arrowBtnLeft.addEventListener("click", prevSlide);
  arrowBtnRight.addEventListener("click", nextSlide);
  
  dotsContainer.addEventListener("click", function (e) {
    // if needed to work only on dots and not on dot container
    if (e.target.classList.contains("dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
  
  //carousel two
  
  var $ = document;
  
  document.addEventListener('DOMContentLoaded', function () {
  
    const sliderMe = () => {
      let currentPosition = 0,
        sliderItem = document.querySelectorAll('.slider-item'),
        sliderItemWidth = window
          .getComputedStyle(sliderItem[0])
          .flexBasis.match(/\d+\.?\d+/g),
        sliderInner = document.querySelector('.slider-inner'),
  
        control = {
          next: document.querySelector('#next'),
          slideNext() {
            currentPosition += parseFloat(sliderItemWidth);
            if (currentPosition > limitPosition) {
              currentPosition = 0;
            }
            sliderInner.style.right = currentPosition + '%';
          },
          prev: document.querySelector('#prev'),
          slidePrev() {
            currentPosition -= parseFloat(sliderItemWidth);
            if (currentPosition < 0) {
              currentPosition = limitPosition;
            }
            sliderInner.style.right = currentPosition + '%';
          }
        },
        limitPosition = sliderItemWidth * (sliderItem.length - Math.floor(100 / sliderItemWidth));
  
      control.next.addEventListener('click', control.slideNext)
      control.prev.addEventListener('click', control.slidePrev)
  
      window.addEventListener("resize", function () {
        currentPosition = 0;
        document.querySelector('.slider-inner').style.right = currentPosition + '%';
      })
    }
    sliderMe();
  
    window.addEventListener("resize", sliderMe)
  
  });
  
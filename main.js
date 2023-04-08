
const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNavbar);


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");



window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    // backTopBtn.classList.add("active");
    header.classList.add("hide");
    
    
  } else {
    header.classList.remove("active");
    header.classList.remove("hide");
    
  }
});


// hero slider

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlide = 0;
let lastActiveSliderItem = heroSliderItems[0];
 
const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlide].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlide];
}

const slideNext = function () {
  if (currentSlide >= heroSliderItems.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);


const slidePrev = function () {
  if (currentSlide <= 0) {
    currentSlide = heroSliderItems.length - 1;
  } else {
    currentSlide--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);


let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}


window.addEventListener("load", autoSlide);


window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
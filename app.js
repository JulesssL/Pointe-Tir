function print(a) {
    console.log(a)
}

const burger = document.querySelector('.boxBurger');
const sidenav = document.getElementById("sideNav");
let isBurgerActive;

let currentSlide = 0;

let intervalCarousel;

document.addEventListener('DOMContentLoaded', () => {
    burger.addEventListener('click', e => {
        e.target.classList.toggle('active');
        isBurgerActive = e.target.classList.value
        if (isBurgerActive == 'boxBurger active'){
            sidenav.classList.add("active");
        }
        if (isBurgerActive == 'boxBurger'){
            sidenav.classList.remove("active");
        }
    })
})


const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}


const observer = new IntersectionObserver(handleIntersect, options)
const targets = document.querySelectorAll('[class*="reveal-"]')
targets.forEach(function (target) {
    observer.observe(target)
})



function moveSlide(direction) {
    const slides = document.querySelector('.carouselSlides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}
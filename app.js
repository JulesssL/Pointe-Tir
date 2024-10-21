function print(a) {
    console.log(a)
}

const burger = document.querySelector('.boxBurger');
const sidenav = document.getElementById("sideNav");
let isBurgerActive;

const targets = document.querySelectorAll('[class*="reveal-"]');

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
    targets.forEach(function (target) {
        target.classList.add('reveal-visible')
    })
})



function moveSlide(direction) {
    const slides = document.querySelector('.carouselSlides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
}
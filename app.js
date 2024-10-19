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
    intervalCarousel = setInterval(moveSlide(+1), 5000);
    


})

function moveSlide(direction) {
    const slides = document.querySelector('.carouselSlides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}vw)`;
    clearInterval(intervalCarousel);
    intervalCarousel = setInterval(moveSlide(+1), 5000);
    
}
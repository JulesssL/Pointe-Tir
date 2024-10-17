function print(a) {
    console.log(a)
}

const burger = document.querySelector('.boxBurger');
const sidenav = document.getElementById("mySideNav");
let isBurgerActive;



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
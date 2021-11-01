let elBurgerBtn = document.querySelector(".header__burger");
let elNav = document.querySelector(".nav");

elBurgerBtn.addEventListener("click",function () {
    elNav.classList.toggle("open-nav")
})
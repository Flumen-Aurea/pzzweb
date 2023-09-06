let mobileIcon = document.querySelector(".mobile-menu-icon");
let topLine = document.querySelector(".line.top");
let middleLine = document.querySelector(".line.middle");
let bottomLine = document.querySelector(".line.bottom");
let mobileMenu = document.querySelector(".mobile-menu")

mobileIcon.addEventListener("click", ()=>{
    mobileIcon.classList.toggle("active");
    topLine.classList.toggle("active");
    middleLine.classList.toggle("active");
    bottomLine.classList.toggle("active");
    mobileMenu.classList.toggle("active");
})

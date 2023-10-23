let view = document.querySelector(".view");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000)

// navbar

function navbar() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
};

// slick slider

$('.section5-slick-slider').slick({
    prevArrow: '.prev2',
    nextArrow: '.next2',
    autoplay: true,
    fade: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        }
    ]
});

// back to top

let topIcon = document.getElementById("top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topIcon.style.display = "flex";
    }
    else {
        topIcon.style.display = "none";
    }
});

function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// aos

AOS.init({
    once: true,
});



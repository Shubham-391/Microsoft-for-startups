let view = document.querySelector(".view");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
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

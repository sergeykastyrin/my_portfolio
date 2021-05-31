let arrowPrev = document.querySelector('.carousel-control-prev');
let arrowNext = document.querySelector('.carousel-control-next');

arrowPrev.onclick = function () {
    arrowPrev.classList.toggle('active');
}

arrowNext.onclick = function () {
    arrowNext.classList.toggle('active');
}
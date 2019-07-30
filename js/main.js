let slideIndex = 1,
    slides = document.getElementsByClassName("carousel-item"),
    next = document.querySelector("#next"),
    prev = document.querySelector("#prev"),
    dotwr = document.querySelector(".carousel-nav-dots"),
    dots = document.querySelectorAll(".carousel-item-dot"),
    autoplay_next = document.querySelector(".carousel-control-next"),
    autoplay_prev = document.querySelector(".carousel-control-prev");

showSlides(slideIndex);

/* Stop Autoslide */
autoplay_next.addEventListener("mouseenter", function () {
    mouseOver()
});

autoplay_next.addEventListener("mouseleave", function () {
    mouseOut()
});

autoplay_prev.addEventListener("mouseenter", function () {
    mouseOver()
});

autoplay_prev.addEventListener("mouseleave", function () {
    mouseOut()
});

dotwr.addEventListener("mouseenter", function () {
    mouseOver()
});

dotwr.addEventListener("mouseleave", function () {
    mouseOut()
});

function mouseOver() {
    clearInterval(autoslide);
}

function mouseOut() {    
    autoslide = setInterval(plusSlide, 5000);    
}


/* Shows the next slide */
next.addEventListener("click", function () {
    plusSlide();
});

function plusSlide() {
    showSlides(slideIndex += 1);
}


/* Shows the previous slide */
prev.addEventListener("click", function () {
    minusSlide();
});

function minusSlide() {
    showSlides(slideIndex -= 1);
}


/* Sets the current slide */
dotwr.addEventListener("click", function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.className.replace("carousel-item-dot") && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}


/* The main function of the slider */
function showSlides(n) {
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/* AutoSlide */
let autoslide = setInterval(plusSlide, 5000);
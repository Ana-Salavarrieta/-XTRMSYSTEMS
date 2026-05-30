let currentSlide = 0;

const slider = document.getElementById("slider");
const slides = slider ? slider.children.length : 0;

function updateSlider() {

    slider.style.transform =
        `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll(".dot").forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === currentSlide
        );

    });

}

function moveSlide(step) {

    currentSlide += step;

    if (currentSlide >= slides) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = slides - 1;
    }

    updateSlider();

}

/* autoplay */

if (slider) {

    setInterval(() => {

        moveSlide(1);

    }, 5000);

}
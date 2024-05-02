document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const totalSlides = slides.length;
    var vw = window.innerWidth;

    let currentIndex = 0;

    function updateSliderPosition() {

        slider.style.transform = `translateX(-${currentIndex * 150}px)`;
    }

    function moveRight() {
        currentIndex = (currentIndex + 1) % (totalSlides - 4); // Adjust this numer to change the slider
        updateSliderPosition();
    }

    function moveLeft() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }

    document.querySelector('.right-arrow').addEventListener('click', moveRight);
    document.querySelector('.left-arrow').addEventListener('click', moveLeft);
});


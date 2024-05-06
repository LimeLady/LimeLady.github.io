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

document.querySelectorAll('.project-image').forEach(function(image) {
    image.addEventListener('click', function() {
        this.classList.toggle('zoomed');
        document.querySelectorAll('.arrow').forEach(function(arrow) {
            arrow.classList.toggle('hidden');
        });
    });
});

var images = [
    
    'images/projects/Dashboard screenshot 2.jpg',
    'images/projects/Dashboard screenshot.jpg',
    'images/projects/Dashboard screenshot 3.png',
    'images/projects/Dashboard screenshot 4.png',
    'images/projects/Dashboard screenshot 5.png',
    // add more image paths as needed
];

var currentImageIndex = 0;

document.querySelector('.left-arrow').addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    document.querySelector('.project-image').src = images[currentImageIndex];
});

document.querySelector('.right-arrow').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    document.querySelector('.project-image').src = images[currentImageIndex];
});
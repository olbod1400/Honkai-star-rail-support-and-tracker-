console.log('hello world');


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('input[name="slides"]');
    const labels = document.querySelectorAll('.navigation label');
    let currentSlide = 0;

    function updateActiveLabel() {
        labels.forEach(label => label.classList.remove('active'));
        labels[currentSlide].classList.add('active');
    }

    document.getElementById('next').addEventListener('click', () => {
        slides[currentSlide].checked = false;
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].checked = true;
        updateActiveLabel();
    });

    document.getElementById('prev').addEventListener('click', () => {
        slides[currentSlide].checked = false;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].checked = true;
        updateActiveLabel();
    });

    // Initialize the first active label
    updateActiveLabel();
});

document.getElementById('prev').addEventListener('click', function() {
    let currentSlide = document.querySelector('input[name="slides"]:checked');
    let prevSlide = currentSlide.previousElementSibling;

    if (prevSlide && prevSlide.name === 'slides') {
        prevSlide.checked = true;
    } else {
        document.getElementById('slide4').checked = true;
    }
});

document.getElementById('next').addEventListener('click', function() {
    let currentSlide = document.querySelector('input[name="slides"]:checked');
    let nextSlide = currentSlide.nextElementSibling;

    if (nextSlide && nextSlide.name === 'slides') {
        nextSlide.checked = true;
    } else {
        document.getElementById('slide1').checked = true;
    }
});

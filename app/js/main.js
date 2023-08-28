document.addEventListener('DOMContentLoaded', () => {

    // slider header
    const prev = document.querySelector('.left'),
        next = document.querySelector('.right'),
        current = document.querySelector('.current'),
        all = document.querySelector('.all'),
        header = document.querySelector('.header');

    let slideIndex = 0;

    let arrayImages = [
        'url(../images/slider_header/slider1.jpg)',
        'url(../images/slider_header/slider2.jpg)',
        'url(../images/slider_header/slider3.jpg)',
    ];
 
    all.textContent = arrayImages.length;

    showBackground(slideIndex);
    showBackgroundBtn(slideIndex);

    function showBackground(index) {
        arrayImages.forEach((item, i, arr) => {
            if(index === i) {
                header.style.backgroundImage = arr[i];
                current.textContent = i + 1;
            }
        });
    }

    function showBackgroundBtn(index) {
        if(index == arrayImages.length - 1) {
            vector1right.style.stroke = '#FFF';
            vector2right.style.stroke = '#FFF';
        } else if(index == 0) {
            vector1left.style.stroke = '#FFF';
            vector2left.style.stroke = '#FFF';
        } else if(index < arrayImages.length - 1 || index > 0) {
            vector1right.style.stroke = '#000';
            vector2right.style.stroke = '#000';
            vector1left.style.stroke = '#000';
            vector2left.style.stroke = '#000';
        }
    }

    function plusSlide(n) {
        slideIndex += n;
        if (slideIndex >= arrayImages.length) {
            slideIndex = arrayImages.length - 1
        }
        if (slideIndex < 0) {
            slideIndex = 0;
        }
        showBackgroundBtn(slideIndex);
        showBackground(slideIndex);
    }

    prev.addEventListener('click', (e) => {
        plusSlide(-1);
    });

    next.addEventListener('click', (e) => {
        plusSlide(1);
    });

    // slider popular place
    let slidesWrapper = document.querySelector('.popularplace__wrapper'),
        slidesField = document.querySelector('.popularplace__inner'),
        slides = document.querySelectorAll('.sliders'),
        prevSlide = document.querySelector('.popularplace__btn-prev'),
        nextSlide = document.querySelector('.popularplace__btn-next'),
        width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%';

    slides.forEach(item => {
        item.style.width = width;
    });

    nextSlide.addEventListener('click', () => {
        if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });

    prevSlide.addEventListener('click', () => {
        if(offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    });
})
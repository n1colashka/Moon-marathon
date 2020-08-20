$(function () {
    const swiper = new Swiper('.header__slider', {
        fadeEffect: {
            crossFade: true
        },
        direction: 'vertical',
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    $('.menu__btn, .menu__close').on('click', function () {
        $('.navigation, .menu__close').toggleClass('navigation--active');
    });

    const regionSwiper = new Swiper('.region__slider', {
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const interierSwiper = new Swiper('.interier__slider', {
        fadeEffect: {
            crossFade: true
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const funSwiper = new Swiper('.fun__slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        centeredSlides: true,

    });

});
/* eslint-disable no-unused-vars */
/* global Swiper */

if (window.matchMedia('(max-width: 991px)').matches) {
  const gallery = new Swiper('.slider-gallery', {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
      nextEl: '.slider-gallery .swiper-button-next',
      prevEl: '.slider-gallery .swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
}

const team = new Swiper('.slider-team', {
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.team .swiper-button-next',
    prevEl: '.team .swiper-button-prev',
  },

});
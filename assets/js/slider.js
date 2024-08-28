console.log('slider running...');

new Swiper('.news__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.news__p-1',
    nextEl: '.news__n-1',
  },
  pagination: {
    el: '.news__p',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    744: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

new Swiper('.organization__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.organization__p-1',
    nextEl: '.organization__n-1',
  },
  pagination: {
    el: '.organization__p',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    744: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

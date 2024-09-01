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
    610: {
      slidesPerView: 2,
    },
    744: {
      slidesPerView: 2,
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
      slidesPerView: 1,
    },
    744: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

new Swiper('.agency__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.agency__p-1',
    nextEl: '.agency__n-1',
  },
  pagination: {
    el: '.agency__p',
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
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.clients__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.clients__p-1',
    nextEl: '.clients__n-1',
  },
  pagination: {
    el: '.clients__p',
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
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.calls__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.calls__p-1',
    nextEl: '.calls__n-1',
  },
  pagination: {
    el: '.calls__p',
    clickable: true,
  },
});

new Swiper('.trust__slider', {
  spaceBetween: 20,
  loop: false,
  navigation: {
    prevEl: '.trust__p-1',
    nextEl: '.trust__n-1',
  },
  pagination: {
    el: '.trust__p',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    564: {
      slidesPerView: 1,
    },
    744: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

new Swiper('.programm__slider-1', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  navigation: {
    prevEl: '.programm__prev-1',
    nextEl: '.programm__next-1',
  },
  pagination: {
    el: '.programm__p-1',
    clickable: true,
  },
});

new Swiper('.programm__slider-2', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  navigation: {
    prevEl: '.programm__prev-2',
    nextEl: '.programm__next-2',
  },
  pagination: {
    el: '.programm__p-2',
    clickable: true,
  },
});

new Swiper('.programm__slider-3', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  navigation: {
    prevEl: '.programm__prev-3',
    nextEl: '.programm__next-3',
  },
  pagination: {
    el: '.programm__p-3',
    clickable: true,
  },
});

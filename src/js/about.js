import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-accordion-container', { showMultiple: true });

const swiperAbout = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 1,
  breakpoints: {
    // when window width is >= 320
    320: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    // when window width is >= 768
    768: {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    // when window width is >= 1440
    1440: {
      slidesPerView: 6,
      spaceBetween: 1,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  modules: [Navigation, Keyboard, Mousewheel],
});

$('.swiper-slide-p').slick({});

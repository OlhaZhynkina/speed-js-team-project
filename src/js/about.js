import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-accordion-container', { showMultiple: true });

const swiper = new Swiper('.about-swiper-container', {
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    1440: {
      slidesPerView: 'auto', // Для десктопів
    },
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    forceToAxis: true,
  },
  on: {
    slideChange: function () {
      const slides = document.querySelectorAll('.swiper-skills');
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === this.activeIndex) {
          slide.classList.add('active');
        }
      });
    },
  },
});

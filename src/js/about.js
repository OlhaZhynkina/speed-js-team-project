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
  navigation: {
    nextEl: '.swiper-button-next',
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

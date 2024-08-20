import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-accordion-container', { showMultiple: true });

const swiperAbout = new Swiper('.about-swiper-container', {
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
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

  slidesPerView: 'auto',

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    // 1440: {
    //   slidesPerView: 'auto',
    //   slidesPerGroup: 1,
    //   spaceBetween: 0,
    // },
  },
});

const skillsList = document.querySelectorAll('.swiper-skills');
let currentIndex = 0;

function updateActiveClass(index) {
  skillsList.forEach((skill, i) => {
    skill.classList.remove('active');
    if (i === index) {
      skill.classList.add('active');
    }
  });
}

updateActiveClass(currentIndex);

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  skillsList[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % skillsList.length;

  skillsList[currentIndex].classList.add('active');
});

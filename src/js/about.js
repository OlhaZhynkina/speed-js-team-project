import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.about-accordion-container', { showMultiple: true });

const swiperAbout = new Swiper('.about-swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  modules: [Navigation, Pagination, Keyboard, Mousewheel],
  navigation: {
    prevEl: '.swiper-button-next',
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
});

const skillsList = document.querySelectorAll('.about-swiper-skills');
let currentIndex = 0;

function updateActiveClass(index) {
  skillsList.forEach((skill, i) => {
    skill.classList.remove('active');
    if (i === index) {
      skill.classList.add('active');
    }
  });
}
const a = '3';

updateActiveClass(currentIndex);

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  skillsList[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % skillsList.length;

  skillsList[currentIndex].classList.add('active');
});

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
    clickable: true,
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

document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.swiper-skills');
  const nextButton = document.querySelector('.swiper-button-next');
  const prevButton = document.querySelector('.swiper-button-prev');
  let currentIndex = 0;

  skills[currentIndex].classList.add('active');

  function showNext() {
    skills[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % skills.length;

    skills[currentIndex].classList.add('active');
  }

  function showPrev() {
    skills[currentIndex].classList.remove('active');

    currentIndex = (currentIndex - 1 + skills.length) % skills.length;

    skills[currentIndex].classList.add('active');
  }

  nextButton.addEventListener('click', showNext);
  prevButton.addEventListener('click', showPrev);
});

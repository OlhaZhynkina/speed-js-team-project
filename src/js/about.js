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

document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.swiper-skills');
  const nextButton = document.querySelector('.swiper-button-next');
  let currentIndex = 0;

  // Show the first item initially
  skills[currentIndex].classList.add('active');

  function showNext() {
    // Remove 'active' class from current item
    skills[currentIndex].classList.remove('active');

    // Move to the next item
    currentIndex = (currentIndex + 1) % skills.length;

    // Add 'active' class to the next item
    skills[currentIndex].classList.add('active');
  }

  // Set up button event listener
  nextButton.addEventListener('click', showNext);
});

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
  modules: [Navigation, Keyboard, Mousewheel],

  slidesPerView: 'auto',
  spaceBetween: 10,

  // slidesPerView: 1,
  // spaceBetween: 1,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 1,
  //   },
  //   768: {
  //     slidesPerView: 3,
  //     spaceBetween: 1,
  //   },
  //   1440: {
  //     slidesPerView: 4,
  //     spaceBetween: 1,
  //   },
  // },
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

  const selectedColor = localStorage.getItem('selectedColor');
  if (selectedColor) {
    applyColorToActiveSkill(selectedColor);
  }
}

function applyColorToActiveSkill(color) {
  skillsList.forEach(skill => skill.removeAttribute('style'));
  const activeSkills = document.querySelector('.about-swiper-skills.active');
  if (activeSkills) {
    activeSkills.style.backgroundColor = color;
  }
}

updateActiveClass(currentIndex);

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  updateActiveClass(currentIndex);
  currentIndex = (currentIndex + 1) % skillsList.length;
  updateActiveClass(currentIndex);
});

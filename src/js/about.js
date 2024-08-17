import Swiper from 'swiper';

import 'swiper/css';

const aboute = document.querySelectorAll('.about');

aboute.forEach(about => {
  about.addEventListener('click', () => {
    about.classList.toggle('active');
  });
});

const swiper = new Swiper('.swiper-wrapper', {
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
  loop: true,
});

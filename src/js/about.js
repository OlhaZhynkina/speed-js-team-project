import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const aboute = document.querySelectorAll('.about');

aboute.forEach(about => {
  about.addEventListener('click', () => {
    about.classList.toggle('active');
  });
});

const swiperAboute = new Swiper('.swiper-container', {
  modules: [Navigation, Keyboard, Mousewheel],
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

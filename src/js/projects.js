import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

console.log('message');

const swiperProjects = new Swiper('.swiper', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

const projectsSection = document.querySelector('.section.projects');

const buttonPrev = document.querySelector(
  '.position-container .swiper-button-prev'
);

const buttonNext = document.querySelector(
  '.position-container .swiper-button-next'
);

const hiddenPrev = document.querySelector('.hiddenPrev');
const hiddenNext = document.querySelector('.hiddenNext');

function checkStatus() {
  hiddenNext.style.display = buttonNext.hasAttribute('disabled')
    ? 'block'
    : 'none';
  buttonNext.firstElementChild.style.display = buttonNext.hasAttribute(
    'disabled'
  )
    ? 'none'
    : 'block';

  hiddenPrev.style.display = buttonPrev.hasAttribute('disabled')
    ? 'block'
    : 'none';
  buttonPrev.firstElementChild.style.display = buttonPrev.hasAttribute(
    'disabled'
  )
    ? 'none'
    : 'block';
}
checkStatus();

buttonNext.addEventListener('click', checkStatus);
buttonPrev.addEventListener('click', checkStatus);

projectsSection.addEventListener('touchstart', checkStatus);
projectsSection.addEventListener('touchend', checkStatus);
projectsSection.addEventListener('touchmove', checkStatus);

projectsSection.addEventListener('keyup', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    checkStatus();
  }
});

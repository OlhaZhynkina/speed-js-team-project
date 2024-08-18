import { getReviews } from './api';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  // breakpoints: {
  //   // when window width is >= 320
  //   320: {
  //     slidesPerView: 6,
  //     spaceBetween: 20,
  //   },
  //   // when window width is >= 768
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 1440
  //   1440: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  // },
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  grabCursor: true,
});

const ulElement = document.querySelector('.js-list-reviews');

function reviewMarkup({ author, avatar_url, review }) {
  return `<li class="item-review swiper-slide">
           <img src="${avatar_url}" class="img-review" alt="${author}" />
           <h3 class="name-review">${author}</h3>
           <p class="text-review">${review}</p>
          </li>`;
}

function reviewsMarkup(array) {
  return array.map(reviewMarkup).join('');
}

async function showReviews() {
  try {
    const data = await getReviews();
    ulElement.innerHTML = reviewsMarkup(data.data);
  } catch (err) {
    console.log(err.status);

    iziToast.error({
      title: 'Error',
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      position: 'topRight',
      message: 'Not found',
    });
  }
}
showReviews();

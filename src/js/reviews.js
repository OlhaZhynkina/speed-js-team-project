import { getReviews } from './api';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  // slidesPerView: 4,
  // spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const ulElement = document.querySelector('.js-list-reviews');
// const errorMessage = document.querySelector('.error-message');

function reviewMarkup({ author, avatar_url, review }) {
  return `<li class="item-review swiper-slide">
            <img src="${avatar_url}" class="img-review" alt="image" />
           <h3 class="name-review">${author}</h3>
           <p class="text-review">${review}</p>
          </li>`;
}

function reviewsMarkup(array) {
  return array.map(reviewMarkup).join('');
}

async function showReviews() {
  // errorMessage.classList.remove('.hidden');
  try {
    const data = await getReviews();
    ulElement.innerHTML = reviewsMarkup(data.data);
  } catch (err) {
    console.log(err.status);
    // errorMessage.classList.add('.hidden');
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

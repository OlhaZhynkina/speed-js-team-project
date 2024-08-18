import { getReviews } from './api';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  breakpoints: {
    // when window width is >= 320
    320: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    // when window width is >= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1440
    1440: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.review-btn-next',
    prevEl: '.review-btn-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});

const reviewBtnPrev = document.querySelector(
  '.review-btn-container .review-btn-prev'
);

const reviewBtnNext = document.querySelector(
  '.review-btn-container .review-btn-next'
);

const reviewHiddenPrev = document.querySelector('.review-hidden-prev');
const reviewHiddenNext = document.querySelector('.review-hidden-next');

function checkStatus() {
  reviewHiddenNext.style.display = reviewBtnNext.hasAttribute('disabled')
    ? 'block'
    : 'none';
  reviewBtnNext.firstElementChild.style.display = reviewBtnNext.hasAttribute(
    'disabled'
  )
    ? 'none'
    : 'block';

  reviewHiddenPrev.style.display = reviewBtnPrev.hasAttribute('disabled')
    ? 'block'
    : 'none';
  reviewBtnPrev.firstElementChild.style.display = reviewBtnPrev.hasAttribute(
    'disabled'
  )
    ? 'none'
    : 'block';
}

const closeIntervalID = setInterval(() => {
  checkStatus();
}, 10);

setTimeout(() => {
  clearInterval(closeIntervalID);
}, 1000);

reviewBtnNext.addEventListener('click', checkStatus);
reviewBtnPrev.addEventListener('click', checkStatus);

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

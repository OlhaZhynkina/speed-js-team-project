import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getReviews } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const ulElement = document.querySelector('.js-list-reviews');
const errorMessage = document.querySelector('.error-message');

function reviewMarkup({ author, avatar_url, review }) {
  return `<li class="item-review gallery">
          <a href="${avatar_url}"> <img src="${avatar_url}" class="img-review" alt="image" />
           <h3 class="name-review">${author}</h3>
           <p class="text-review">${review}</p></a>
          </li>`;
}

const lightbox = new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionDelay: 250,
  nextBtnCaption: 'Next',
  prevBtnCaption: 'Previous',
});

function reviewsMarkup(array) {
  return array.map(reviewMarkup).join('');
}

async function showReviews() {
  errorMessage.classList.remove('.hidden');
  try {
    const data = await getReviews();
    console.log(data.data);
    ulElement.innerHTML = reviewsMarkup(data.data);

    lightbox.refresh();
  } catch (err) {
    console.log(err.status);
    errorMessage.classList.add('.hidden');
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

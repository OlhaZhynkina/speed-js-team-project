import { sendWorkTogetherRequest } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.comments');
const form = document.querySelector('.contact-form');
const message = document.getElementById('email-success');
const text = document.getElementById('text-success');

const btn = document.querySelector('.wt-btn');

// modal
const overlay = document.querySelector('.wt-modal-overlay');
const modal = document.querySelector('.wt-modal-container');
const closeModalBtn = document.querySelector('.wt-modal-close-btn');
const modalTitle = document.querySelector('.wt-modal-title');
const modalText = document.querySelector('.wt-modal-info');

emailInput.addEventListener('input', validateEmail);
commentsInput.addEventListener('input', validateEmail);

const highlightInput = input => {
  input.classList.add('highlighted');
  setTimeout(() => {
    input.classList.remove('highlighted');
  }, 2000);
};

btn.addEventListener('click', () => {
  if (btn.disabled) {
    highlightInput(commentsInput);
  }
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  modal.classList.remove('is-hidden');
  overlay.classList.remove('is-hidden');

  try {
    const response = await sendWorkTogetherRequest(
      emailInput.value.trim(),
      commentsInput.value.trim()
    );
    modalTitle.textContent = response.title;
    modalText.textContent = response.message;
  } catch (error) {
    iziToast.show({
      message:
        error.response?.data?.message || error.message || 'An error occurred',
      backgroundColor: '#ef4040',
      position: 'topRight',
      messageSize: 16,
      messageColor: '#fff',
      messageLineHeight: '150%',
      timeout: 4000,
    });
  } finally {
    form.reset();
    btn.disabled = true;
    emailInput.classList.remove('error');
    emailInput.classList.remove('success');
    commentsInput.classList.remove('error');
    commentsInput.classList.remove('success');
    message.textContent = '';
    text.textContent = '';
    commentsInput.classList.remove('highlighted-wt');
  }
});

function validateEmail() {
  const emailIsValid =
    emailInput.checkValidity() && emailInput.value.trim() !== '';
  const commentIsFilled = commentsInput.value.trim() !== '';

  if (emailIsValid) {
    emailInput.classList.remove('error');
    emailInput.classList.add('success');
    message.textContent = 'Success!';
    message.style.color = '#3cbc81';

    if (!commentIsFilled) {
      commentsInput.classList.add('highlighted-wt');

      commentsInput.classList.remove('success');
      commentsInput.classList.add('error');
      text.textContent = 'Enter a message';
      text.style.color = '#e74a3b';
    } else {
      commentsInput.classList.remove('highlighted-wt');

      commentsInput.classList.remove('error');
      commentsInput.classList.add('success');
      text.textContent = 'Success!';
      text.style.color = '#3cbc81';
    }
  } else {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    message.textContent = 'Invalid email, try again';
    message.style.color = '#e74a3b';

    commentsInput.classList.remove('highlighted-wt');

    commentsInput.classList.remove('success');
    commentsInput.classList.remove('error');
    text.textContent = '';
  }

  btn.disabled = !(emailIsValid && commentIsFilled);

  btn.disabled
    ? (btn.style.backgroundColor = '#3B3B3B')
    : (btn.style.backgroundColor = '');
}

btn.addEventListener('click', () => {
  modal.classList.remove('.is-hidden');
});

const closeModal = () => {
  modal.classList.add('is-hidden');
  overlay.classList.add('is-hidden');
};

closeModalBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

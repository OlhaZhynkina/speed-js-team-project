import { sendWorkTogetherRequest } from './api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const emailInput = document.getElementById('email');
const commentsInput = document.querySelector('.comments');
const form = document.querySelector('.contact-form');
const message = document.getElementById('email-success');
const btn = document.querySelector('.wt-btn');

// modal
const overlay = document.querySelector('.wt-modal-overlay');
const modal = document.querySelector('.wt-modal-container');
const closeModalBtn = document.querySelector('.wt-modal-close-btn');
const modalTitle = document.querySelector('.wt-modal-title');
const modalText = document.querySelector('.wt-modal-info');

emailInput.addEventListener('blur', validateEmail);
commentsInput.addEventListener('input', validateEmail);

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
    emailInput.classList.remove('error');
    emailInput.classList.remove('success');
    message.textContent = '';
    btn.disabled = true;
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
  } else {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    message.textContent = 'Invalid email, try again';
    message.style.color = '#e74a3b';
  }

  btn.disabled = !(emailIsValid && commentIsFilled);
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

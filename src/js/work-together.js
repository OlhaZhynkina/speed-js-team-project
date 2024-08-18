import { submitWorkTogetherForm } from './api';

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');
const emailSuccess = document.getElementById('email-success');
const modalOverlay = document.querySelector('.wt-modal-overlay');
const modalMessage = document.querySelector('.wt-modal-info');
const modalTitle = document.querySelector('.wt-modal-title');
const closeModalBtn = document.querySelector('.wt-modal-close-btn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function openModal(message) {
  modalMessage.textContent = message;
  modalTitle.textContent = 'Thank you for your interest in cooperation!';
  modalOverlay.style.opacity = '1';
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.style.visibility = 'visible';
}

function openErrModal(message) {
  modalMessage.textContent = message;
  modalTitle.textContent = 'Something went wrong';
  modalOverlay.style.opacity = '1';
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.style.visibility = 'visible';
}

function closeModal() {
  modalOverlay.style.opacity = '0';
  modalOverlay.style.pointerEvents = 'none';
  modalOverlay.style.visibility = 'hidden';
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    emailInput.classList.remove('invalid');
    emailInput.classList.remove('valid');
    emailError.style.display = 'none';
    emailSuccess.style.display = 'none';
  } else if (!emailValue.match(emailRegex)) {
    emailInput.classList.add('invalid');
    emailInput.classList.remove('valid');
    emailError.style.display = 'block';
    emailSuccess.style.display = 'none';
  } else {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    emailError.style.display = 'none';
    emailSuccess.style.display = 'block';
  }
}

emailInput.addEventListener('blur', validateEmail);

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const emailValue = formData.get('email').trim();

  if (!emailValue.match(emailRegex)) {
    emailInput.classList.add('invalid');
    emailError.style.display = 'block';
    emailSuccess.style.display = 'none';
    return;
  } else {
    emailInput.classList.remove('invalid');
    emailError.style.display = 'none';
  }

  try {
    const data = {
      email: emailValue,
      comment: formData.get('comments').trim(),
    };

    const response = await submitWorkTogetherForm(data);

    if (response.status === 201) {
      openModal(
        'The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.'
      );
      form.reset();
      emailInput.classList.remove('valid', 'invalid');
      emailSuccess.style.display = 'none';
    } else {
      openErrModal(`Error: ${response.data.message}`);
    }
  } catch (error) {
    openErrModal('An unexpected error occurred. Please try again.');
  }
});

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

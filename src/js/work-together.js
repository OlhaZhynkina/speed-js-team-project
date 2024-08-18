import { submitWorkTogetherForm } from './api';

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');
const modalOverlay = document.querySelector('.wt-modal-overlay');
const modalMessage = document.querySelector('.wt-modal-info');
const closeModalBtn = document.querySelector('.wt-modal-close-btn');

function openModal(message) {
  modalMessage.textContent = message;
  modalOverlay.style.opacity = '1';
  modalOverlay.style.pointerEvents = 'auto';
  modalOverlay.style.visibility = 'visible';
}

function closeModal() {
  modalOverlay.style.opacity = '0';
  modalOverlay.style.pointerEvents = 'none';
  modalOverlay.style.visibility = 'hidden';
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const emailValue = formData.get('email').trim();

  if (!emailInput.checkValidity()) {
    emailInput.classList.add('invalid');
    emailError.style.display = 'block';
    return;
  } else {
    emailInput.classList.remove('invalid');
    emailError.style.display = 'none';
  }

  try {
    const data = {
      email: emailValue,
      comments: formData.get('comments').trim(),
    };

    const response = await submitWorkTogetherForm(data);

    if (response.status === 201) {
      openModal('Your request has been successfully submitted!');
      form.reset();
    } else {
      openModal(`Error: ${response.data.message}`);
    }
  } catch (error) {
    openModal('An unexpected error occurred. Please try again.');
  }
});

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

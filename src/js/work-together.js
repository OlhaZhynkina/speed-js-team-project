import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = event.target.email.value;
    const comments = event.target.comments.value;

    try {
      const response = await fetch(
        'https://your-server-endpoint.com/api/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, comments }),
        }
      );

      if (response.ok) {
        document.getElementById('modal').style.display = 'block';
        event.target.reset();
      } else {
        throw new Error('Помилка на сервері. Спробуйте ще раз.');
      }
    } catch (error) {
      iziToast.error({
        position: 'topRight',
        message: error.message,
      });
    }
  });
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});

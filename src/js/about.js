const aboute = document.querySelectorAll('.about');

aboute.forEach(about => {
  about.addEventListener('click', () => {
    about.classList.toggle('active');
  });
});

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

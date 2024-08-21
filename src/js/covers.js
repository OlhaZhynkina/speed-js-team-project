import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function () {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      let elementsToAnimate = entry.target.querySelectorAll('.marquee__inner');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  let observer = new IntersectionObserver(handleIntersection, options);
  let section = document.querySelector('.covers-section');

  if (section) {
    observer.observe(section);
  } else {
    console.error('Елемент .covers-section не знайдено');
  }

  const lightbox = new SimpleLightbox('.marquee__inner a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});

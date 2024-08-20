import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const section = document.querySelector('marquee__inner');
document.addEventListener('DOMContentLoaded', () => {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  function interSection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elementsToAnimate =
          entry.target.querySelectorAll('.marquee__inner');
        elementsToAnimate.forEach(element => {
          element.classList.add('animate');
        });
      } else {
        let elementsToAnimate =
          entry.target.querySelectorAll('.marquee__inner');
        elementsToAnimate.forEach(element => {
          element.classList.remove('animate');
        });
      }
    });
  }

  try {
    let observer = new IntersectionObserver(interSection, options);

    let section = document.querySelector('.covers-section');
    if (section) {
      observer.observe(section);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error.message);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.marquee__inner a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});

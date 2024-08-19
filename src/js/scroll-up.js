// scroll

const scrollUpBtn = document.querySelector('.scroll-up-btn');
scrollUpBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'auto',
    });
}

function showScrollToTopBtn() {
    if (window.scrollY > 1000) {
        scrollUpBtn.classList.remove('scroll-up-btn-hidden');
    } else {
        scrollUpBtn.classList.add('scroll-up-btn-hidden');
    }
}
showScrollToTopBtn();

window.addEventListener('scroll', scrollUpBtn);


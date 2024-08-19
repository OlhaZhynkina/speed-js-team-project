// scroll-up

const scrollUpBtn = document.querySelector('.scroll-up-btn');
scrollUpBtn.addEventListener('click', scrollToTop);

async function scrollToTop() {
    await new Promise((resolve) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        resolve();
})
}

function showScrollToTopBtn() {
    if (window.scrollY > 1000) {
        scrollUpBtn.classList.remove('scroll-up-btn-hidden');
    } else {
        scrollUpBtn.classList.add('scroll-up-btn-hidden');
    }
}

window.addEventListener('scroll', showScrollToTopBtn);




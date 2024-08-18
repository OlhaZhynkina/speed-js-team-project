
document.addEventListener('DOMContentLoaded', function () {
    const modalButton = document.querySelector('.header-modal-btn');
    const closeButton = document.querySelector('.header-modal-close');
    const navButtons = document.querySelectorAll('.header-modal-anchor');
    const orderButton = document.querySelector('.header-modal-order-link')
    const modalWindow = document.querySelector('.header-modal-window');
    const body = document.body;
    const hiddenMenu = document.querySelector('.header-hidden-menu');
    const menuButton = document.querySelector('.header-menu');
    const menuNavButtons = document.querySelectorAll('.header-anchor')

    let isHiddenMenuOpen = false;
/*-----MODAL WINDOW--------*/

function openMenu() {
    
    modalWindow.style.display = 'flex';
    body.style.overflow = 'hidden';
    modalWindow.animate([
        { opacity: 0, transform: 'translateX(10px)' },
        { opacity: 1, transform: 'translateX(0)' }
    ], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
}

function closeMenu() {
    modalWindow.animate([
        { opacity: 1, transform: 'translateX(0)' },
        { opacity: 0, transform: 'translateX(10px)' }
    ], {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards'
    }).onfinish = () => {
    modalWindow.style.display = 'none'};
    body.style.overflow = '';
}

modalButton.addEventListener('click', openMenu);

closeButton.addEventListener('click', closeMenu);

navButtons.forEach(button => {
    button.addEventListener('click', closeMenu)
})
orderButton.addEventListener('click', closeMenu)

/*--------HIDDEN MENU--------*/

function openHiddenMenu() {
    hiddenMenu.animate([
        { opacity: 0, transform: 'translateY(-20px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ], {
        duration: 300,
        easing: 'ease',
        fill: 'forwards'
    });

    hiddenMenu.classList.add('open');
    isHiddenMenuOpen = true;
}

function closeHiddenMenu() {
    hiddenMenu.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-20px)' }
    ], {
        duration: 300,
        easing: 'ease',
        fill: 'forwards'
    }).onfinish = () => {
    hiddenMenu.classList.remove('open')};
    isHiddenMenuOpen = false;
}

function toggleHiddenMenu() {
    isHiddenMenuOpen ? closeHiddenMenu() : openHiddenMenu();
}

menuButton.addEventListener('click', toggleHiddenMenu);

menuNavButtons.forEach(button => {
    button.addEventListener('click', closeHiddenMenu)
});

document.addEventListener('click', function(e) {
    if (isHiddenMenuOpen && !hiddenMenu.contains(e.target) && !menuButton.contains(e.target)) {
        closeHiddenMenu()
    }
})

})





document.addEventListener('DOMContentLoaded', () => {
  const mainButton = document.querySelector('.main-button');
  const colorButtons = document.querySelector('.color-buttons');
  const colorButtonElements = document.querySelectorAll('.color-button');
  const colorSquares = document.querySelectorAll('.g-color');
  const colorCircles = document.querySelectorAll('.s-color');
  const colorTexts = document.querySelectorAll('.color-text');
  const svgElements = document.querySelectorAll('.c-svg');
  const coloredBackgroundImages = document.querySelectorAll(
    '.colored-background-image'
  );

  const gradients = {
    '#c6e327': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(89, 104, 8), rgb(198, 227, 39))',
      image: '/src/img/colored-images/colored-1-x1.png',
    },
    '#0041e8': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(0, 25, 88), rgb(0, 65, 232))',
      image: '/src/img/colored-images/colored-2-x1.png',
    },
    '#ed3b44': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(105, 41, 45), rgb(237, 59, 68))',
      image: '/src/img/colored-images/colored-3-x1.png',
    },
    '#b662dd': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(100, 37, 129), rgb(182, 98, 221))',
      image: '/src/img/colored-images/colored-4-x1.png',
    },
    '#237f76': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(16, 78, 72), rgb(35, 127, 118))',
      image: '/src/img/colored-images/colored-5-x1.png',
    },
    '#ff7f08': {
      gradient:
        'linear-gradient(270deg, rgb(28, 29, 32) 50%, rgb(172, 83, 0), rgb(255, 127, 8))',
      image: '/src/img/colored-images/colored-6-x1.png',
    },
  };

  const applyColor = color => {
    const { gradient, image } = gradients[color];

    colorSquares.forEach(grdnt => {
      grdnt.style.background = gradient;
    });

    colorCircles.forEach(clr => {
      clr.style.backgroundColor = color;
    });

    colorTexts.forEach(text => {
      text.style.color = color;
    });

    svgElements.forEach(svg => {
      svg.style.stroke = color;
    });

    coloredBackgroundImages.forEach(bgImg => {
      bgImg.style.backgroundImage = `url(${image})`;
    });
  };

  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    applyColor(savedColor);
  }

  colorButtonElements.forEach(button => {
    button.addEventListener('click', () => {
      const color = button.getAttribute('data-color').toLowerCase();

      localStorage.setItem('selectedColor', color);

      applyColor(color);
    });
  });

  mainButton.addEventListener('click', () => {
    colorButtons.classList.toggle('show');
  });
});

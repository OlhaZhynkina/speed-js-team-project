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
    '#ed3b44': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #69292d 67.71%, #ed3b44 99.91%)',
      image: '/src/img/colored-images/colored-1-x1.png',
    },
    '#c6e327': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #596808 67.71%, rgba(198, 227, 39, 0.76) 99.91%)',
      image: '/src/img/colored-images/colored-2-x1.png',
    },
    '#0041e8': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #001958 67.71%, #0041e8 99.91%)',
      image: '/src/img/colored-images/colored-3-x1.png',
    },
    '#e6533c': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #9f3626 67.71%, #e6533c 99.91%)',
      image: '/src/img/colored-images/colored-4-x1.png',
    },
    '#2b4441': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #1e3633 67.71%, #2b4441 99.91%)',
      image: '/src/img/colored-images/colored-5-x1.png',
    },
    '#ff7f08': {
      gradient:
        'linear-gradient(90.11deg, #1c1d20 49.69%, #ac5300 67.71%, #ff7f08 99.91%)',
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
      svg.style.fill = color;
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

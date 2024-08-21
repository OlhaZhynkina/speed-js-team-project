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
  const hoveredCircles = document.querySelectorAll('.h-circle');

  const gradients = {
    '#c6e327': { className: 'cool-color-lime' },
    '#0041e8': { className: 'cool-color-blue' },
    '#ed3b44': { className: 'cool-color-red' },
    '#b662dd': { className: 'cool-color-purple' },
    '#237f76': { className: 'cool-color-teal' },
    '#ff7f08': { className: 'cool-color-orange' },
  };

  const colorClasses = {
    '#ed3b44': 'red-clr',
    '#0041e8': 'blue-clr',
    '#c6e327': 'yellow-clr',
    '#b662dd': 'purple-clr',
    '#237f76': 'green-clr',
    '#ff7f08': 'orange-clr',
  };

  const applyColor = color => {
    const colorClassName = colorClasses[color];
    const gradientClassName = gradients[color]?.className;

    colorSquares.forEach(square =>
      square.classList.remove(...Object.values(colorClasses))
    );
    colorCircles.forEach(clr => (clr.style.backgroundColor = ''));
    colorTexts.forEach(text => (text.style.color = ''));
    svgElements.forEach(svg => (svg.style.stroke = ''));
    coloredBackgroundImages.forEach(
      bgImg => (bgImg.style.backgroundImage = '')
    );
    hoveredCircles.forEach(circle =>
      circle.classList.remove(...Object.values(gradients).map(g => g.className))
    );

    colorSquares.forEach(
      square => colorClassName && square.classList.add(colorClassName)
    );
    colorCircles.forEach(clr => (clr.style.backgroundColor = color));
    colorTexts.forEach(text => (text.style.color = color));
    svgElements.forEach(svg => (svg.style.stroke = color));
    hoveredCircles.forEach(
      circle => gradientClassName && circle.classList.add(gradientClassName)
    );
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

  document.addEventListener('click', event => {
    if (
      !colorButtons.contains(event.target) &&
      !mainButton.contains(event.target)
    ) {
      colorButtons.classList.remove('show');
    }
  });
});

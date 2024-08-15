document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const currentTheme = localStorage.getItem('theme') || 'day';
  document.body.classList.add(currentTheme);

  themeSwitcher.addEventListener('click', () => {
    let newTheme = document.body.classList.contains('day') ? 'night' : 'day';
    document.body.classList.remove('day', 'night');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

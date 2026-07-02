window.addEventListener('load', () => {
  const introLoader = document.getElementById('introLoader');

  if (!introLoader) return;

  setTimeout(() => {
    introLoader.classList.add('hide');
  }, 4300);

  setTimeout(() => {
    introLoader.remove();
  }, 5200);
});
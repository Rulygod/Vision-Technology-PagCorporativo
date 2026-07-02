const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showItem(index) {
  items.forEach((item) => {
    item.classList.remove('active');
  });

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  items[index].classList.add('active');

  if (dots[index]) {
    dots[index].classList.add('active');
  }
}

nextBtn.addEventListener('click', () => {
  currentIndex++;

  if (currentIndex >= items.length) {
    currentIndex = 0;
  }

  showItem(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  }

  showItem(currentIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showItem(currentIndex);
  });
});
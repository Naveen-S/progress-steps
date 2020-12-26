console.log('Linked');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const progress = document.getElementById('progress');

let currentActive = 1;

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // Enable disable buttons
  const actives = document.querySelectorAll('.active');
  if (actives.length === circles.length) {
    next.setAttribute('disabled', true);
  } else if (actives.length === 1) {
    prev.setAttribute('disabled', true);
  } else {
    next.removeAttribute('disabled');
    prev.removeAttribute('disabled');
  }

  // Move progress width
  let width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  progress.style.width = width;
};

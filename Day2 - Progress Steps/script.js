"use strict";

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circles = document.querySelectorAll('.circle');

let currentActiveIdx = 1;

next.addEventListener('click', () => {
  currentActiveIdx++;
  if (currentActiveIdx > circles.length) {
    currentActiveIdx = circles.length;
  }

  update();

});

prev.addEventListener('click', () => {
  currentActiveIdx--;
  if (currentActiveIdx < 1) {
    currentActiveIdx = 1;
  }
  update();
});


function update() {
  circles.forEach( (circle, idx) => {
    if (idx < currentActiveIdx) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCircles = document.querySelectorAll('.active');
  progress.style.width = ((activeCircles.length - 1) / (circles.length - 1) * 100) + "%";

  if (currentActiveIdx === 1) {
    prev.disabled = true;
  } else if (currentActiveIdx === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}



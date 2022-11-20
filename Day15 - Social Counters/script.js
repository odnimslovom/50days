"use strict";

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {

    const target = Number(counter.getAttribute('data-target'));
    const increment = target / 200;
    const currentCounter = +counter.innerText;

    counter.innerText = Math.ceil(currentCounter + increment);

    if (currentCounter < target) {
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
})

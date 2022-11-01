"use strict";

const insert = document.getElementById('insert');

window.addEventListener('keydown', (evt) => {
  insert.innerHTML = `
    <div class="key">
    ${evt.key === ' ' ? 'Space' : evt.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${evt.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${evt.code}
    <small>event.code</small>
  </div>
  <div class="key">
    Press any key to get the keyCode
  </div>
  `;
})

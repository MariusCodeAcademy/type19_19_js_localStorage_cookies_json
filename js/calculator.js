'use strict';
console.log('local.js file was loaded');

// taikomes
const els = {
  form: document.forms[0],
  sk1El: document.getElementById('sk1'),
  sk2El: document.getElementById('sk2'),
  rez: document.getElementById('formRez'),
  minusBtn: document.getElementById('minus'),
  historyListEl: document.getElementById('rezults'),
};
console.log('els  ===', els);

// event listener
els.form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('pateikta');
  // gauti inputu reiksme ir jas sudeti
  const sk1 = els.sk1El.valueAsNumber;
  const sk2 = els.sk2El.valueAsNumber;
  const suma = sk1 + sk2;
  console.log('suma ===', suma);
  // patalpinti i rezulta
  els.rez.textContent = suma;
  addToHistory(sk1, sk2, suma);
});

els.minusBtn.addEventListener('click', () => {
  console.log('minus');
  const sk1 = els.sk1El.valueAsNumber;
  const sk2 = els.sk2El.valueAsNumber;
  const atimtis = sk1 - sk2;
  console.log('atimtis ===', atimtis);
  els.rez.textContent = atimtis;
  addToHistory(sk1, sk2, atimtis, '-');
});

function addToHistory(n1, n2, total, zenklas = '+') {
  // sukurti li
  const liEl = document.createElement('li');
  // prideti jam textContenta
  liEl.textContent = `${n1} ${zenklas} ${n2} = ${total}`;
  // patalpinti li i ul
  els.historyListEl.append(liEl);
}

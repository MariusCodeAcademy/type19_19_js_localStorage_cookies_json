'use strict';
console.log('local.js file was loaded');

// issaugti i localstorage firstName kurios reisme 'James'
// localstorage.setItem(keyname, value)
// keyname yra string,
// value - string

localStorage.setItem('firstName', 'James Bond');
const poemText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam nisi aspernatur! Nostrum eaque corporis explicabo non deserunt tempore nam! ';
localStorage.setItem('poem', poemText);

// gauti is localStorage
const firstName = localStorage.getItem('firstName');
console.log('firstName ===', firstName);

const outputEl = document.getElementById('output');
const btnEl = document.getElementById('add');
const clearBtnEl = document.getElementById('clear');

let vienetaiText = '';

clearBtnEl.addEventListener('click', () => {
  // istrinti is stotage 'vnt' elementa
  localStorage.removeItem('vnt');
  outputEl.textContent = '';
  vienetaiText = '';
});

// skripto pradzioje,
let vntStorage = localStorage.getItem('vnt');
console.log('vntStorage ===', vntStorage);
// jei turim issaugota stringa pasimam ir naudojam kaip pradine reiksme
if (vntStorage !== null) {
  vienetaiText = vntStorage;
  outputEl.append(vienetaiText);
}

btnEl.addEventListener('click', () => {
  outputEl.append('1, ');
  vienetaiText += '1, ';
  console.log('vienetaiText ===', vienetaiText);
  localStorage.setItem('vnt', vienetaiText);
});

// kai prijungiam localStorage
// skripto pradzioje,
// pasitikrinam ar yra reikme irasyta i storage
// jei yra tai naudajam irasyta
// jei ne tai naudojam pradine reiksme
// skripto eigoje kur ivyksta pakeitimas, mes issaugom pakeitima i storage
// localStorage.setItem('array', [1, 2, { name: 5 }]);

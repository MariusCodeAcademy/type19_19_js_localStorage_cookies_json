'use strict';
console.log('cookies.js file was loaded');

// issaugti i cookies firstName kurio reisme 'James'
const future = new Date('12/05/2023');
const futureUtc = future.toUTCString();
console.log('futureUtc ===', futureUtc);
// document.cookie = `firstName=James; expires=${futureUtc}`;
// document.cookie = `lastName=Bond; expires=${futureUtc}`;
// document.cookie = `age=45; expires=${futureUtc}`;

let sausainiai = document.cookie;
console.log('sausainiai ===', sausainiai);

// cookie istrynimas - nustatyti data i praeiti
const past = new Date('12/05/2000');
document.cookie = `age=45; expires=${past.toUTCString()}`;

// taikomes
const els = {
  form: document.forms[0],
  hideBtn: document.getElementById('hide'),
};

// tik atejus i psl ziurim ar yra nustatytas showForm cookis
// jei yra slepiam forma
const showFormCookie = getCookie('showForm');
console.log('showFormCookie ===', showFormCookie);
if (showFormCookie !== false) {
  els.form.classList.add('d-none');
}

els.hideBtn.addEventListener('click', () => {
  // uzdeti formai display none
  els.form.classList.add('d-none');
  // nustatyti cookie 3 dienom
  setCookie('showForm', 'true', 3);
});

// console.log('last', getCookie('showForm'));

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
}

// sukurti cookie town kuris butu lygus Vilnius ir galiotu 2 sav

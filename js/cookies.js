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

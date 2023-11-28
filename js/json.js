'use strict';
console.log('json.js file was loaded');

// issitraukti todos is localstorage
let todos = localStorage.getItem('todos');
// atvesti atgal i js masyvo objeko forma
todos = JSON.parse(todos);

console.log('todos ===', todos);
// paversti masyva i json teksta
const jsonTextFromArr = JSON.stringify(todos);

// localStorage.setItem('todos', jsonTextFromArr);

// objektu palyginimas

const aObj = { lastName: 'Bond' };
const bObj = { lastName: 'Bond' };

if (JSON.stringify(aObj) === JSON.stringify(bObj)) {
  console.log('Lygus');
} else {
  console.log('Nelygus');
}

const todos1 = [
  {
    _title: 'Read a book',
    id: 't_1',
    done: false,
    timeStamp: '2023-11-28T08:39:52.090Z',
    editMode: false,
  },
  {
    _title: 'go out',
    id: 't_2',
    done: false,
    timeStamp: '2023-11-28T08:48:13.151Z',
    editMode: false,
  },
  {
    _title: 'do a cold plunge',
    id: 't_3',
    done: false,
    timeStamp: '2023-11-28T08:48:18.198Z',
    editMode: false,
  },
];
// seklia kopija shalow copy
const todoCopy = todos1.slice();
// padaryti deep kopija su JSON
console.log(todoCopy === todos1);
console.log(todoCopy[0] === todos1[0]);

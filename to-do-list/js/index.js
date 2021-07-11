const addForm = document.querySelector('.add');
const toDoList = document.querySelector('.todos');
const search = document.querySelector('.search input');
const clock = document.querySelector('.clock');

// add new todo
const generateHtmlTemplate = (todo) => {
  
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  toDoList.innerHTML += html;
};

addForm.addEventListener('submit', e => {

  e.preventDefault();
  const todo = addForm.add.value.trim();
  if(todo.length){
    generateHtmlTemplate(todo);
    addForm.reset();
  };
});

// delete todo
toDoList.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();;
  };
});

// search todos
const searchToDo = (term) => {

  Array.from(toDoList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(toDoList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

};

search.addEventListener('keyup', e => {

  const term = search.value.toLowerCase().trim();
  searchToDo(term);

});

const tick = () => {

  const now = new Date();

  const h = dateFns.format(now, 'HH');
  const m = dateFns.format(now, 'mm');
  const s = dateFns.format(now, 'ss');
  const D = dateFns.format(now, 'Do');
  const M = dateFns.format(now, 'MMM');
  const acDate = dateFns.format(now, 'Do MMM YYYY - HH : mm : ss');

  const html = `
    <span>${D} of</span>
    <span>${M}</span> - 
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
    <p>${acDate}</p>
  `;

  clock.innerHTML = html;
};

setInterval(tick, 1000);

// callback 'hell'
// const getTodos = (resource ) => {

//   return new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         resolve(data)
//       } else if(request.readyState === 4){
//         reject('error getting some');
//       };
//     });

//     request.open('GET', resource);
//     request.send();
//   });

// };


// getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
//   console.log('promise one resolved:', data);
//   return getTodos('https://jsonplaceholder.typicode.com/todos/2');
// }).then((data) => {
//   console.log('promise two resolved:', data);
//   return getTodos('https://jsonplaceholder.typicode.com/todos/3')
// }).then((data) => {
//   console.log('promise three resolved:', data);
// }).catch((err) => {
//   console.log('promise rejected:', err);
// });

// fetch api

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
//   console.log('resolved', response);
//   return response.json();
// }).then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log('rejected', err);
// });
const addForm = document.querySelector('.add');
const toDoList = document.querySelector('.todos');
const search =document.querySelector('.search input');

// add toDos
const generateToDoTemplate = todo => {

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
    generateToDoTemplate(todo);
    addForm.reset();
  };

});

// delete toDos
toDoList.addEventListener('click', e =>{

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  };

});

// seach toDos keyup event

const filterToDos = (term) => {

  Array.from(toDoList.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(toDoList.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));    
};

search.addEventListener('keyup', () =>{

  const term = search.value.trim().toLowerCase();
  filterToDos(term);
});
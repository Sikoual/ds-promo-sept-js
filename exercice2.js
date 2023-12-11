// Récupération des éléments HTML
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

// Événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todo = input.value.trim();

  if (todo !== '') {
    const newItem = document.createElement('li');
    newItem.textContent = todo;

    const highlightButton = document.createElement('button');
    highlightButton.textContent = 'Terminée';
    highlightButton.classList.add('todo-done');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.classList.add('delete-button');

    newItem.appendChild(highlightButton);
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);

    input.value = '';
  }
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-button')) {
    const todo = e.target.parentElement;

    list.removeChild(todo);
  } else if (e.target.classList.contains('todo-done')) {
    const todo = e.target.parentElement;
    todo.style.backgroundColor = 'yellow'; //
  }

  // if (e.target.tagName === "BUTTON") { // Vérifie si l'élément cliqué est un
  // bouton const todo = e.target.parentElement;  list.removeChild(todo); }
});

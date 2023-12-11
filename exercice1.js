// Sélectionnez le bouton et le texte par ID
// const button = document.getElementById('button');
// const text = document.getElementById('text');


// Exo 1 :

const button = document.querySelector('#button');
const text = document.querySelector('#text');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  text.textContent= '';
})

// Exo 1 bis
let index = 0;
button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Nouveau li ${index}`
  list.appendChild(li);
  index++
})







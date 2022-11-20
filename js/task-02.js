const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const targetPlace = document.querySelector('#ingredients');
  
ingredients.forEach(element => {
  const tagEl = document.createElement("li");
  tagEl.textContent = element;
  tagEl.className = "item";
  targetPlace.append(tagEl);
});
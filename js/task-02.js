const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
console.log(list);

// the first way

const listOfIngredients = ingredients.forEach(item => {
  let li = document.createElement('li');
  li.textContent = item;
  li.classList.add('item');
  list.append(li);
  console.log(li);
});

// the second way

// const firstIngredient = document.createElement('li');
// firstIngredient.textContent = ingredients[0];
// firstIngredient.classList.add('item');
// console.log(firstIngredient);

// const secondIngredient = document.createElement('li');
// secondIngredient.textContent = ingredients[1];
// secondIngredient.classList.add('item');
// console.log(secondIngredient);

// const thirdIngredient = document.createElement('li');
// thirdIngredient.textContent = ingredients[2];
// thirdIngredient.classList.add('item');
// console.log(thirdIngredient);

// const fourthIngredient = document.createElement('li');
// fourthIngredient.textContent = ingredients[3];
// fourthIngredient.classList.add('item');
// console.log(fourthIngredient);

// const fifthIngredient = document.createElement('li');
// fifthIngredient.textContent = ingredients[4];
// fifthIngredient.classList.add('item');
// console.log(fifthIngredient);

// const sixthIngredient = document.createElement('li');
// sixthIngredient.textContent = ingredients[5];
// sixthIngredient.classList.add('item');
// console.log(sixthIngredient);

// list.append(
//   firstIngredient,
//   secondIngredient,
//   thirdIngredient,
//   fourthIngredient,
//   fifthIngredient,
//   sixthIngredient
// );

// the third way with innerHTML

// const markup = ingredients
// .map((ingredient) => `<li class="item"> ${ingredient}</li>`)
// .join("");
// console.log(markup);

// list.innerHTML = markup;

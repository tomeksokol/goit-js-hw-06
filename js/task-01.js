//number of categories

const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

//Animals

const animals = document.querySelector('h2');
console.log(`Category: ${animals.textContent}`);

const numberOfAnimals = document.querySelectorAll('.item li');
console.log(`Elements: ${numberOfAnimals.length}`);
//Categories

const firstCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${firstCategory[0].textContent}`);

const secondCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${secondCategory[1].textContent}`);

const thirdCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${thirdCategory[2].textContent}`);

//number of categories

const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

//Animals

const animals = document.querySelector('.item > h2');
console.log(`Category: ${animals.textContent}`);

const numberOfAnimals = document.querySelectorAll('.item li');
console.log(`Elements: ${numberOfAnimals.length}`);

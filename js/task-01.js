//number of categories

const numberOfCategories = document.querySelectorAll('#categories .item > h2');
console.log(`Number of categories: ${numberOfCategories.length}`);

//First Category

const firstCategoryName = document.querySelectorAll('.item > h2');
console.log(`Category: ${firstCategoryName[0].textContent}`);

const elementNumberCat1 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat1[0].children.length}`);

//Second Category

const secondCategoryName = document.querySelectorAll('.item > h2');
console.log(`Category: ${secondCategoryName[1].textContent}`);

const elementNumberCat2 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat2[1].children.length}`);

//Third Category
const thirdCategoryName = document.querySelectorAll('.item > h2');
console.log(`Category: ${thirdCategoryName[2].textContent}`);

const elementNumberCat3 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat3[2].children.length}`);

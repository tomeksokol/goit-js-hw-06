//number of categories

const numberOfCategories = document.querySelectorAll('#categories .item > h2');
console.log(`Number of categories: ${numberOfCategories.length}`);

//First Category

const firstCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${firstCategory[0].textContent}`);

const elementNumberCat1 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat1[0].children.length}`);

//Second Category

const secondCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${secondCategory[1].textContent}`);

const elementNumberCat2 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat2[1].children.length}`);

//Third Category
const thirdCategory = document.querySelectorAll('.item > h2');
console.log(`Category: ${thirdCategory[2].textContent}`);

const elementNumberCat3 = document.querySelectorAll('.item > ul');
console.log(`Elements: ${elementNumberCat3[2].children.length}`);

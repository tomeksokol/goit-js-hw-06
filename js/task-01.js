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

// second way
// document.addEventListener("DOMContentLoaded", () => {
//   const d = document;
//   const qs = (selector) => d.querySelector(selector);
//   const qsa = (selector) => d.querySelectorAll(selector);

//   const items = qsa("li.item");
//   console.log(items);
//   console.log(items.length);
//   [...items].forEach((item) => {
//     console.log(item.children[0].textContent);
//     console.log(item.children[1].children.length);
//   });
// });

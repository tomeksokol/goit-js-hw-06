function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberOfBoxes = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

const num = event => {
  let amountOfBoxes = event.currentTarget.value;
  console.log(amountOfBoxes);
};

const box = event => {
  let div = document.createElement('div');
  div.classList.add('newDiv');
  div.style.width = '30px';
  div.style.height = '30px';
  div.style.backgroundColor = getRandomHexColor();
  boxes.append(div);
  console.log(div);
};

function createBoxes(amount) {}

const removeBox = event => {
  let removeDiv = document.querySelectorAll('.newDiv');
  console.log(removeDiv);
  removeDiv[0].remove();
};

numberOfBoxes.addEventListener('input', num);
createBtn.addEventListener('click', box);
destroyBtn.addEventListener('click', removeBox);

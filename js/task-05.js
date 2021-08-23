const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

const viewName = event => {
  if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = event.currentTarget.value;
    console.log(outputName.innerHTML);
  }
};

inputName.addEventListener('input', viewName);

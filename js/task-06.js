const input = document.querySelector('#validation-input');
const inputSymbols = document.querySelector('[type="text"]');
const validBackground = document.querySelector('#validation-input.valid');
const dataLength = document.querySelector('input[data-length="6"]');
const symbolsLength = Number(dataLength.dataset.length);

const lengthValidation = event => {
  if (event.currentTarget.value.length === 0) {
    input.style.border = '2px solid #bdbdbd';
    console.log('Please enter 6 symbols');
  } else if (event.currentTarget.value.length === symbolsLength) {
    //input.classList.add("valid");
    input.style.borderColor = '#4caf50';
    console.log('Correct symbol length');
  } else {
    //input.classList.add("invalid");
    input.style.borderColor = '#f44336';
    console.log('The symbol length is incorect');
  }
};

inputSymbols.addEventListener('blur', lengthValidation);

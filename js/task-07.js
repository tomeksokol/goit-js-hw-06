const rangeInput = document.querySelector('#font-size-control');
console.log(rangeInput);
const textView = document.querySelector('#text');
console.log(textView.textContent);

const changeFontSize = event => {
  let fontSize = event.currentTarget.value + 'px';
  console.log(fontSize);
  textView.style.fontSize = fontSize;
};

rangeInput.addEventListener('input', changeFontSize);

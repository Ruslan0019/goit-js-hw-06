let fontSizeControl = document.querySelector('#font-size-control');
let fontSize = document.querySelector('#text');

fontSizeControl.addEventListener('input', handleInput);

function handleInput() {
    fontSize.style.fontSize = fontSizeControl.value + 'px';
}
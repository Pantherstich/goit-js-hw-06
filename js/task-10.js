const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const boxes = document.querySelector('#boxes');

createButton.addEventListener('click', () => createBoxes(input.value)); 
destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(number) {
    let size = 30;
    for (let i = 1; i <= number; i += 1) {
        const div = document.createElement('div');
        div.style.backgroundColor = getRandomHexColor();
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
        size += 10;
        boxes.append(div);
    }
 }

function destroyBoxes()
{
    boxes.innerHTML = '';
    input.value = '';
}

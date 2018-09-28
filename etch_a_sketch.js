const WINDOW_SIZE = 500;
let gridSize = 16;
let divsArray = [];

const container = document.querySelector('.container');
const resetButton = document.querySelector('button');
resetButton.addEventListener('click', reset);
const radioButtons = document.querySelectorAll('input');

createGrid();

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', function() {
    gridSize = radioButtons[i].value;
    deleteGrid();
    createGrid();
  });
}

function createGrid() {
  let divSize = WINDOW_SIZE / (Math.sqrt(gridSize)) - 2;
  for (var i = 0; i < gridSize; i++) {
    divsArray[i] = document.createElement('div');
    divsArray[i].style.height = divSize + 'px';
    divsArray[i].style.width = divSize + 'px';
    divsArray[i].style.border = '1px solid black';
    container.appendChild(divsArray[i]);
    divsArray[i].addEventListener('mouseover', colorIt);
  }
}

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function colorIt(e) {
  e.target.style.backgroundColor = 'red';
}

function reset() {
  for (var i = 0; i < gridSize; i++) {
    divsArray[i].style.backgroundColor = 'white';
  }
}
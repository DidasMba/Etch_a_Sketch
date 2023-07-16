// Create the grid squares using JavaScript
const container = document.querySelector('.container');
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const gridSquare = document.createElement('div');
  gridSquare.classList.add('grid-square');
  container.appendChild(gridSquare);
}
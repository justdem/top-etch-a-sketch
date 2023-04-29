const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', resetGrid);
const containerDiv = document.querySelector('.container');
newGrid(16);

function newGrid(dimension) {
    if (dimension > 100) {dimension = 100};
    for (let i=1; i<=dimension; i++) {
        const div = document.createElement('div')
        div.classList.add('row');
        containerDiv.appendChild(div);

        for (let i=1; i<=dimension; i++) {
            const divCell = document.createElement('div')
            divCell.classList.add('cell');
            div.appendChild(divCell);
        }
    }

    const divCells = document.querySelectorAll('.cell');
    for (let i=0; i<divCells.length; i++) {
        divCells[i].addEventListener('mouseover', (e)=> changeColor(e))
    };
}

function changeColor(e) {
    e.target.style.background = 'black';
}

function resetGrid() {
   const gridDimension = prompt("Provide grid dimensions (max. 100)", 16);
   if (gridDimension === null) return;
   else {
    const oldGrid = document.querySelectorAll('.row');
    for (let i=0; i<oldGrid.length; i++) {oldGrid[i].remove()};
    newGrid(Number(gridDimension));
    }  
}
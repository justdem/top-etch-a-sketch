const containerDiv = document.querySelector('.container')

for (let i=1; i<=16; i++) {
    const div = document.createElement('div')
    div.classList.add('row');
    containerDiv.appendChild(div);

    for (let i=1; i<=16; i++) {
        const divCell = document.createElement('div')
        divCell.classList.add('cell');
        div.appendChild(divCell);
    }
}

const divCells = document.querySelectorAll('.cell')
for (let i=0; i<divCells.length; i++) {
    divCells[i].addEventListener('mouseover', (e)=> changeColor(e))
};

function changeColor(e) {
    e.target.style.background = 'black';
}

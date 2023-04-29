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
//create div that will act as row
//create 16 divs within that div to act as cells
//loop 16 times to add div to container div
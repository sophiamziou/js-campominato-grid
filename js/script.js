// 1- visualizzare l'elemento al click del bottone
const play = document.querySelector('.play');

play.addEventListener('click', function(){
    document.querySelector('.field').style.visibility = "visible";
})

// 2- creare la griglia 10x10 

function createGridSquare(number){
    const currentElement = document.createElement ('div')
    currentElement.classList.add('box')
    currentElement.innerText = number;
    return currentElement;
}

// 3- cliccando sulle celle si colorano e compare il numero in console

let grid = document.getElementById('field');

// Bonus 
let row_cell;

let option = document.getElementById("select");
function onChange() {
  let level = option.value;
  switch (level) {
    case '1' :
        console.log('hai scelto 1');
        row_cell = 10;
        return row_cell;

    case '2' :
        console.log('hai scelto 2');
        row_cell = 9;
        return row_cell;
    
    case '3' :
        console.log('hai scelto 3');
        row_cell = 7;
        return row_cell;
    }
  console.log(level)
}

option.onchange = onChange;
onChange();

console.log(row_cell)

for(let i=0; i<row_cell * row_cell; i++){
    const currentSquare = createGridSquare(i+1);
    currentSquare.addEventListener('click', function(){
        this.classList.add('blue');
    });
    grid.appendChild(currentSquare);
}
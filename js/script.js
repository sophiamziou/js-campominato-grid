// 1- visualizzare l'elemento al click del bottone
const play = document.querySelector('.play');

play.addEventListener('click', function(){
    document.querySelector('.grid').style.visibility = "visible";
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

let row_cell;

for(let i=0; i < row_cell * row_cell; i++){
    const currentSquare = createGridSquare(i+1);
    currentSquare.addEventListener('click', function(){
        this.classList.toggle('blue');
        console.log(this.innerText)
    });
    grid.appendChild(currentSquare);
}

// Bonus 

let option = document.getElementById("select");
function onChange() {
  let level = option.value;

  switch (level) {
    case '1':
        console.log('hai scelto 1');
        break;

    case '2' :
        console.log('hai scelto 2');
        break;

    case '3' :
        console.log('hai scelto 3');
        break;

    default:
        console.log('scegli livello');
}
  console.log(level);
}
option.onchange = onChange;
onChange();
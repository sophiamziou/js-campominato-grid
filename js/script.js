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

for(let i=0; i < 100; i++){
    const currentSquare = createGridSquare(i+1);
    currentSquare.addEventListener('click', function(){
        this.classList.toggle('blue');
    });
    grid.appendChild(currentSquare);
}

// // Bonus 

// let option = document.getElementById("select");
// function onChange() {
//   let level = option.value;
//   switch (level) {
//     case '1' :
//         console.log('hai scelto 1');
//         return '10';

//     case '2' :
//         console.log('hai scelto 2');
//         return '9';
    
//     case '3' :
//         console.log('hai scelto 3');
//         return '7';
//     }
// }

// option.onchange = onChange;
// onChange();

// let row_cell = onChange();
// console.log(row_cell);



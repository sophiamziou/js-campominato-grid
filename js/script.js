
// 1- visualizzare l'elemento al click del bottone

const play = document.querySelector('.play');

play.addEventListener('click', function(){
    document.querySelector('.field').style.visibility = "visible";
})


// 2- creare la griglia 10x10 

const container = document.querySelector('.field');

for (i=0; i<100; i++){
    let element;
    element = `<div class="box">${i+1}</div>`;
    container.innerHTML += element;
}

// 3- cliccando sulle celle si colorano e compare il numero in console

// const cell = document.querySelector('.box');

// cell.addEventListener('click', function(){
//     cell.style.backgroundColor = "red";  
// })

// const box = document.getElementsByClassName('box');

// BONUS







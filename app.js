console.log('js working')

//CRIAR UMA FUNÇÃO PARA  AJUSTAR O TAMANHO DA FONTE DO DISPLAY
//  A CADA CARACTERE NOVO DIMINUIR A FONTE PARA NÃO TRANSBORDAR!

//create basic functions for math operations
// sum
function sum(a,b){
    return a+b;
}
// subtraction
function subtract(a,b){
    return a-b;
}
// divide
function divide(a,b){
    return a/b;
}
// times
function times(a,b){
    return a*b;
}
// power
function power(a,b){
    return a**b; // or Math.pow(a,b)
}
// square root
function sqrt(a){
    return Math.sqrt(a);
}


//function to print key on display text
const display = document.querySelector('.current-operation p')
function updateDisplay(e){
    display.innerText += e.innerText;
    
    if (display.innerText.length > 6){
        display.style.fontSize = '0.5em';
    }

    return e;

}

//function to print last operation on display

//function to identify operator and call operator function

//bind events for calculator keyboard on click

//function to process keypress
function keyPress(e){
    console.log(e.innerText)
    return this.e;
}


const keys = document.querySelectorAll('.key');

keys.forEach((element) =>{
    element.addEventListener('click',function(){keyPress(element)})
    element.addEventListener('click',function(){updateDisplay(element)})
});


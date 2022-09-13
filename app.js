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

//operators array
const operatorsArray = ['C','+/-','÷','/','×','-','+','=']
//function to print key on display text
const display = document.querySelector('.current-operation p');
const pastOpDisplay = document.querySelector('.past-operation > p');

function updateDisplay(e){
    //if only zero at display, clear:
    if (display.innerText=='0'){
        display.innerText='';
    }

    // if operator "C", clear display
    if (e.innerText=='C'){
        display.innerText='0';
        pastOpDisplay.innerText = '';
        console.log('Clear calculator.')
        return e;
    }

    
    // if key pressed is an operator, show on superior line
    if (operatorsArray.includes(e.innerText) && e.innerText != '='){
        if(pastOpDisplay.innerText.includes(e.innerText)){
            //second operator pressed, makes calc on "memory", calc on pastOpDisplay line  
            pastOpDisplay.innerText += display.innerText+'=';
            display.innerText='result';

            //PAREI AQUI:
            //PAREI AQUI:
            //PAREI AQUI:
            console.log('REALIZAR OPERAÇÃO NA MEMÓRIA')
            //chamar função de cálculo
            return (e);
        }

        pastOpDisplay.innerText += display.innerText+e.innerText;
        display.innerText='0';

    } else if (e.innerText == '='){
        console.log('REALIZAR OPERAÇÃO')
    } else {
        display.innerText += e.innerText; //append new key e.innerText
    }

    return e;
}

function updateDisplayFont(e){
        //adjust display text size
        if (display.innerText.length > 6){
            display.style.fontSize = '0.5em';
        }
}
//function to print last operation on display

//function to identify operator and call operator function

//function to identify if it will start a new operation on display

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
    element.addEventListener('click',function(){updateDisplayFont(element)})
});


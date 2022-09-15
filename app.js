console.log('js working')

//operators array
const operatorsArray = ['C','+/-','÷','/','×','-','+','=','%'];

//global variable to identify if it will start a new operation on display
let newEquation = false;

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
    }    //if starting new equation

    if(newEquation===true){
        console.log('new eq')
        display.innerText='';
        pastOpDisplay.innerText = ''
    }

    
    // if key pressed is an operator, show on superior line
    if (operatorsArray.includes(e.innerText) && e.innerText != '='){
        if(pastOpDisplay.innerText.includes(e.innerText)){
            //second operator pressed, makes calc on "memory", calc on pastOpDisplay line  
            pastOpDisplay.innerText += display.innerText+'=';

            if (pastOpDisplay.innerText.includes('+/-')){
                console.log('includes +/-')
                let invertedPolarityEq = invertPolarity(pastOpDisplay.innerText)
                operate(invertedPolarityEq);
            } else{
                //chamar função de cálculo
                console.log('operating:')
                operate(pastOpDisplay.innerText)
            }

            return (e);
        }

        pastOpDisplay.innerText += display.innerText+e.innerText;
        display.innerText='0';

    } else if (e.innerText == '='){
        pastOpDisplay.innerText += display.innerText+'=';
        display.innerText= preprocessEq(pastOpDisplay.innerText)

    } else {
        newEquation = false;
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


//special function to +/- button, inverts the polarity of a number/eq.
function invertPolarity(str){
    console.log('invert polarity function');
    let invertedPol = str;
    
    if(invertedPol.includes('+/-')){
        invertedPol = invertedPol.replace('+/-','-');
        console.log(`InvertedPol: ${invertedPol}`)
    }

    return (invertedPol);
}


//function to convert str to right equation format, it calls operate()
function preprocessEq(str){
    let equation = str;

    equation = equation.replace('=','')
                    .replace('÷','/')
                    .replace('×','*')
                    .replace(',','.')

    return operate(equation);
}

//function to identify operator and call operator function
function operate(str){
    //special +- operator:
    let equation =''
    if(str.includes('+/-')){
        console.log('special operator, invert polarity');
        equation = invertPolarity(str);
        console.log(`Equation: ${equation}`)
    } else{
        equation = str;
    }

    console.log(`Operate: ${equation}`);
    newEquation = true;
    //JS can evaluate a str equation using the Function constructor:
    return new Function('return '+equation)();
}

//function to check keypress
function keyPress(e){
    //console.log(e.innerText)
    return this.e;
}

//bind events for calculator keyboard on click
const keys = document.querySelectorAll('.key');

keys.forEach((element) =>{
    element.addEventListener('click',function(){keyPress(element)})
    element.addEventListener('click',function(){updateDisplay(element)})
    element.addEventListener('click',function(){updateDisplayFont(element)})
});


//
// OBS: OS BOTÕES: % e  +/- ainda não estão funcionando.
// finalizar função para +/-[OK]
// criar função para %



function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

var num1 = '';
var num2 = '';
var operator = '';
const display = document.querySelector(".display");
function operate(a, b, operator){
    if(operator == '+') return add(a, b);
    if(operator == '-') return subtract(a, b);
    if(operator == '*') return multiply(a, b);
    if(operator == '/') return divide(a, b);
}

function populate(a){
    //const display = document.querySelector(".display");
    //display.textContent = a;
    if(num1 == '') {
        num1 = a;
        display.textContent = a;
        console.log("populate "+a);
        return;
    }
    else {
        num2 = a;
        display.textContent = display.textContent + a;
        return;
    }
}
// function populate2(b){
//     const display = document.querySelector(".display");
//     display.textContent = display.textContent + ' '+ b;
//     num2 = b;
// }
function popuOperator(c){
    //const display = document.querySelector(".display");
    display.textContent = display.textContent + ' '+ c;
    operator = c;
}

function run(){
    const button0 = document.querySelector(".zero");
    button0.addEventListener("click", () => populate(0));
    const button1 = document.querySelector(".one");
    button1.addEventListener("click",() => populate(1));
    const button2 = document.querySelector(".two");
    button2.addEventListener("click",() => populate(2));
    const button3 = document.querySelector(".three");
    button3.addEventListener("click",()=>populate(3));
    const button4 = document.querySelector(".four");
    button4.addEventListener("click",()=>populate(4));
    const button5 = document.querySelector(".five");
    button5.addEventListener("click",()=>populate(5));
    const button6 = document.querySelector(".six");
    button6.addEventListener("click",()=>populate(6));
    const button7 = document.querySelector(".seven");
    button7.addEventListener("click",()=>populate(7));
    const button8 = document.querySelector(".eight");
    button8.addEventListener("click",()=>populate(8));
    const button9 = document.querySelector(".nine");
    button9.addEventListener("click",()=>populate(9));
    const buttonAdd = document.querySelector(".add");
    buttonAdd.addEventListener("click",()=>popuOperator('+'));
    const buttonSub = document.querySelector(".subtr");
    buttonSub.addEventListener("click", ()=>popuOperator('-'));
    const buttonMul = document.querySelector(".mul");
    buttonMul.addEventListener("click", ()=>popuOperator('*'));
    const buttonDiv = document.querySelector(".div");
    buttonDiv.addEventListener("click", ()=>popuOperator('/'));
    buttonResult = document.querySelector(".Equals");
    buttonResult.addEventListener("click", () => {
        //const display = document.querySelector(".display");
        display.textContent = operate(num1, num2, operator);
    })
    const clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        num1 = '';
        num2 = '';
        operator = '';
        display.textContent = "the Current Display";
    })
    
}

run();
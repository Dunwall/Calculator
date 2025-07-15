const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');
const content = display.textContent;
let a = "";
let b = "";
let op = "";

btns.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        let type = e.target.dataset.type;
        let number = e.target.dataset.value;
        let operator = e.target.dataset.value;
        if(type === 'number'){
            updateDisplay(number);
        }
        else if(type === 'operator'){
            console.log(operator);
        }
        else if(type === 'allClear'){
            console.log(type);
        }
        else if(type === 'del'){
            console.log(type);
        }
    }) 
})

function updateDisplay(d){
    display.textContent += d;
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(op,a,b){
    op = Number(op);
    if(op == '+'){
        console.log(add(a,b));
    }

    else if(op == '-'){
        console.log(subtract(a,b));
    }

    else if(op == '*'){
        console.log(multiply(a,b));
    }

    else if(op == '/'){
        console.log(divide(a,b));
    }
}
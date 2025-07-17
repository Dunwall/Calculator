const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');
const content = display.textContent;
let secondInput = "";
let firstInput = "";
let op = "";
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const type = e.target.dataset.type;
        const value = e.target.dataset.value;
        if(type === 'allClear'){
            clearDisplay();
        }
        if(type === 'del'){
            del();
        }
        if(type === 'number'){
            if(op === ""){
                firstInput += value;
                console.log(`first value: ${firstInput}`);
                updateDisplay(firstInput);
            }
            else{
                secondInput += value;
                console.log(`second value: ${secondInput}`);
                updateDisplay(secondInput);
            }
        }
        else if(type === 'operator' && firstInput !== ""){
            if(value === '='){
                if(firstInput && secondInput && op !== ""){
                    const result = operate(op,firstInput,secondInput);
                    updateDisplay(result);
                    console.log(result);
                    firstInput = String(result);
                    secondInput = "";
                    op = "";
                }
            }
            else{
                op = value;
                updateDisplay(op);
            }
        }
    })
})

function del(){
    if(op === ""){
        firstInput = firstInput.slice(0,-1);
        updateDisplay(firstInput);
    }
    else{
        secondInput = secondInput.slice(0,-1);
        updateDisplay(secondInput);
    }
}

function clearDisplay(){
    firstInput = '';
    secondInput = '';
    op = '';
    display.textContent = "";
}

function updateDisplay(...d){
    display.textContent = d;
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
    a = Number(a);
    b = Number(b);
    if(op == '+'){
        let result = add(a,b)
        return result;
    }

    else if(op == '-'){
        let result = subtract(a,b);
        return result;
    }

    else if(op == '*'){
        let result = multiply(a,b);
        return result;
    }

    else if(op == '/'){
        let result = divide(a,b);
        return result;
    }
}
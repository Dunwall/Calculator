const btns = document.querySelectorAll('button');
const display = document.querySelector('#display');
const content = display.textContent;
let secondInput = "";
let firstInput = "";
let op = "";
let pressedFlag = false;

window.addEventListener('keydown',(e)=>{
    console.log("Key:", e.key, "| Code:", e.code);

    const digitBtn = document.querySelector(`[data-digit="${e.code}"]`);
    const numpadBtn  = document.querySelector(`[data-numPad="${e.code}"]`);
    const opBtn = document.querySelector(`[data-op="${e.code}"]`);

    const valueBtns = document.querySelectorAll('[data-value]');
    let specBtn = "";

    valueBtns.forEach(btn=>{
        if(btn.dataset.value === e.key){
            specBtn = btn;
            console.log(specBtn);
        }
    });

    if(digitBtn){
        digitBtn.click();
    }
    else if(numpadBtn){
        numpadBtn.click();
    }

    else if(specBtn){
        specBtn.click();
    }
    
    else if(opBtn || special){
        opBtn.click();
    }
})

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        playSound(e);
        const type = e.target.dataset.type;
        const value = e.target.dataset.value;
        if(type === 'allClear'){
            clearDisplay();
        }
        if(type === 'del'){
            del();
        }
        if(type === 'number'){
            if(pressedFlag === true){
                clearDisplay();
                pressedFlag = false;
            }
            if(op === ""){
                if(value === '.' && firstInput.includes('.')){
                    return;
                    console.log('bitch');
                }
                firstInput += value;
                updateDisplay(firstInput);
                console.log(`firstValue = ${firstInput}`);
            }
            else if(op!=="="){
                    if(value === '.' && secondInput.includes('.')){
                        return;
                    }
                    secondInput += value;
                    updateDisplay(secondInput);
                    console.log(`secondValue = ${secondInput}`);
            }

            
        }
        else if(type === "operator" && firstInput!==""){
                if(value === "=" && secondInput!==""){
                    let result = operate(op,firstInput,secondInput);
                    let finalResult = round(result);
                    updateDisplay(finalResult);
                    console.log(finalResult);
                    pressedFlag = true;
                }
                else if(value !== "=" && secondInput!==""){
                    let firstResult = operate(op,firstInput,secondInput);
                    let roundedFirstResult = firstResult;
                    updateDisplay(roundedFirstResult);
                    console.log(`First Result: ${roundedFirstResult}`);
                    firstInput = roundedFirstResult;
                    secondInput = "";
                    op = value;
                    updateProgress();
                }
                else{
                    op = value;
                    updateProgress();
                }
        }
    })
})

function round(a){
    return parseFloat(a.toFixed(10));
}

function updateProgress(){
    updateDisplay(`${firstInput} ${op} ${secondInput}`);
}

function playSound(e){
    const type = e.target.dataset.type;
    const audio = document.querySelector(`audio[data-type="${type}"]`);
    if(!audio)return;

    audio.currentTime = 0;
    audio.play();
}

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
    if(b!=0){
        return a/b;
    }
    else{
        return "Nice try ya basterd";
    }
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

let a;
let b;
let op;

function add(a,b){
    console.log(a+b);
}

function subtract(a,b){
    console.log(a-b);
}

function multiply(a,b){
    console.log(a*b);
}

function divide(a,b){
    console.log(a/b);
}

add(1,2);
subtract(1,2);
multiply(3,1);
divide(4,5);

function operate(a,b,op){
    if(op=='+'){
        return add(a,b);
    }
    else if(op == '-'){
        return subtract(a,b);
        
    }
    else if(op == '*'){
        return multiply(a,b);
    }
    else if(op == '/'){
        return divide(a,b);
    }
    else{
        alert('what are you tryna do?');
    }
}
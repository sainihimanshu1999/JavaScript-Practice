let num1 = 5
let num2 = 2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function add(){
    document.getElementById("sum").textContent += num1 + num2
}

function subtract(){
    document.getElementById("sum").textContent = num1 - num2
}

function divide(){
    document.getElementById("sum").textContent = num1 / num2
}

function multiply(){
    document.getElementById("sum").textContent = num1 * num2
}
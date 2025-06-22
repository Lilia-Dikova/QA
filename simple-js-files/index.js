
const buttonFind = document.querySelector("#findBtn")
let output = document.querySelector('#output')

function factorial (num) {
    if (num < 0 || !Number.isInteger(num)) {
        return "Invalid input, please enter a non-negative integer"; 
    }
    if (num === 0) {
        return 1;
    }
    return num * factorial (num - 1)
}



function onClick (e) {
    e.preventDefault();

    let inputValue =  document.querySelector('#number')
    let inputNumber = Number (inputValue.value);
    
    console.log(inputNumber)
    if (inputNumber < 0 || isNaN(inputNumber) || !Number.isInteger(inputNumber)) {
        alert ('Please enter a valid number');
        output.innerHTML = 'Ask me a valid number'
        output.style.color = 'red';
        inputValue.value = ''; 
        return;
    }
    output.style.color = 'black';
    let outPutNumber = factorial (inputNumber);
    output.innerHTML = `The number is <b>${outPutNumber}</b>`;

    document.querySelector('#number').value = '';
    
}

buttonFind.addEventListener('click' , onClick)
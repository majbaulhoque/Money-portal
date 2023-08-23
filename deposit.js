// ! Bank html part

// ? step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // ? step-2: Get the deposit amount from the deposit input field
    const depositField =  document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // * Step-3: get the current deposit total amount.
    // ? for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('balance-id');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount
})


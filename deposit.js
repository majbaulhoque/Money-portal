// ! Bank html part

// ? step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // ? step-2: Get the deposit amount from the deposit input field
    const depositField =  document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // * Step-3: get the current deposit total amount.
    // ? for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-id');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5: get the balance current total
    const balanceTotalElement = document.getElementById('balance-id');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7
    depositField.value = '';
})


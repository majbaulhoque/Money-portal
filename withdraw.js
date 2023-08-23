/*
1. Add event handler with the withdraw button.
2. Get the withdraw amount from the withdraw input field
2.5. Also make sure to convert the input into a number by using parseFloat.
3. Get previous withdraw total
4. Calculate total withdraw total amount
4.5. Set total withdraw amount
5. Get the previous Balance total
6.calculate new balance total
6.5: Set the new balance total
7. Clear the input field
*/

// ! step-1:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // ! step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // ! step-3:
    const previousWithdrawElement = document.getElementById('withdraw-id');
    const previousWithdrawTotalString = previousWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // ! step-4:

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;

    // ! step-5
    const balanceTotalElement = document.getElementById('balance-id');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // ! step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})
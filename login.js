// step: 1-> Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-id');
    const email = emailField.value;
    // step-3: get password
    // set id on the html element 
    // get the element
    // get the value from the element
    const passField = document.getElementById('pass-id');
    const password = passField.value;
    console.log(email,password)

    // ! Danger: DO NOT VERIFY EMAIL password on the client site
    // step-4 verify email and password

    if(email === 'majba@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }else{
        alert('Invalid user!')
    }
})


// ! Bank html part

// ? step-1: add event listener to the deposit button
let depositInput = 0;
document.getElementById('btn-deposit').addEventListener('click',function(){
    // ? step-2: Get the deposit amount from the deposit input field
    let depositField = document.getElementById('deposit-field');
    
    depositInput = depositField.value;
    console.log(depositInput);
    // console.log(depositField)
})
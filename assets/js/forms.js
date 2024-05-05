let input1 = document.getElementById('email-0');
let input2 = document.getElementById('email-1');

function SubmitForm0() { 
    ValidateForm(input1.value,input1)
}

function SubmitForm1() {

   ValidateForm(input2.value,input2)
}

function ValidateForm(inputsToValidate,input) {
    let padrao = /[a-zA-Z0-9._]*.@gmail.com/;
    const parent = input.parentElement;
    const spanText = parent.querySelector('span');
    if(padrao.test(inputsToValidate)) {
        spanText.innerText = ''; 
        input.style.outlineColor = '#bfbfbf';
    }else {
    console.log(input)
        spanText.innerText = 'Error email invalido';
        input.style.outlineColor = 'red';
    }


}


/*
list.map(formulario => {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        
    })
})

function ValidateForm(inputsToValidate) {

     let padrao = /[a-zA-Z0-9._]*.@gmail.com/
     padrao.test(inputsToValidate) ? 'ola' : 'b';
}



let txt = "marcelo.im.italo2975@gmail.com"
ValidateForm(txt)
*/

















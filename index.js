
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);

    if (secondNumber > firstNumber) {
        document.getElementById('message').innerText = 'Formulário válido! O segundo número é maior que o primeiro.';
        document.getElementById('message').style.color = 'green';
    } else if (secondNumber === firstNumber) {
        document.getElementById('message').innerText = 'Formulário inválido! O primeiro número é igual ao segundo número.';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').innerText = 'Formulário inválido! O segundo número deve ser maior que o primeiro número.';
        document.getElementById('message').style.color = 'red';
    }
});



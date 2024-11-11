// Selecionando o elemtento calcular no html
const calcular = document.getElementById('calcular');

// Criando a função imc
function imc () {
    // Selecionando os elemtentos no html
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // validando o as caixas de texto
    if (nome !== '' && altura !== '' && peso !== '') {
        
        // Calculando o IMC
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        // Criando um variável vazia para armazenar a calssificação
        let classificacao = '';

        // Definindo os valores da classificação
        if (valorIMC < 18.5){
            calssificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal.';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III.';
        }

        // Passando o texto para a caixa de texto "resultado"
        resultado.textContent = `${nome}, seu imc é ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}

// Quando o botão for clicado, chamar a função do IMC 
calcular.addEventListener('click', imc);
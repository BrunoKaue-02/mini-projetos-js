// Selecionadno oss elementos no html
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

// função para ligar a lâmpada
function lampOn() {
    if (!isLampBroken()) {
    lamp.src = './img/ligada.jpg';
    }
}
// Função para desligar a lâmpada
function lampOff() {
    if (!isLampBroken()){
    lamp.src = './img/desligada.jpg';
    }
}

// Função que quebra a lâmpada
function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

// Verificar se a lâmpada está quebrada
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

// criando funções para os botões
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

// quando passar o mouse por cima da lâmpada ela liga/desliga
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);

// Ao clicar duas vezes a lâmpada quebra
lamp.addEventListener('dblclick', lampBroken);
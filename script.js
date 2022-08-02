
function criandoFilho () {
const pai = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
  const filho = document.createElement('div');
  filho.className = 'pixel';
  pai.appendChild(filho);
}
}
criandoFilho ();

const corPreta = document.getElementsByClassName('preto')[0];
const corRosa = document.getElementsByClassName('rosa')[0];
const corRoxo = document.getElementsByClassName('roxo')[0];
const corAzul = document.getElementsByClassName('azul')[0];

window.onload = corPreta.addEventListener('click', function () {
    corPreta.classList.remove('color');
    corPreta.classList.add('selected');
    corPreta.classList.add('color');
})

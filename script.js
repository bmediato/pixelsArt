function criandoFilho() {
  const pai = document.querySelector('#pixel-board');

  for (let index = 1; index <= 25; index += 1) {
    const filho = document.createElement('div');
    filho.className = 'pixel';
    pai.appendChild(filho);
  }
}
criandoFilho();

const corPreta = document.getElementById('preto');
const corRosa = document.getElementById('rosa');
const corRoxo = document.getElementById('roxo');
const corAzul = document.getElementById('azul');

window.onload = function () {
  corPreta.classList.remove('color');
  corPreta.classList.add('selected');
  corPreta.classList.add('color');
}

const cores = document.querySelectorAll('.color');

function selectColor(evento) {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selectColor);
}
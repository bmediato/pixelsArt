function criandoFilho () {
const pai = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
  const filho = document.createElement('div');
  filho.className = 'pixel';
  pai.appendChild(filho);
}
}
criandoFilho ();

window.onload = function () {
  const corPreta = document.getElementById('preto');
  corPreta.classList.remove('color');
  corPreta.classList.add('selected');
  corPreta.classList.add('color');
}


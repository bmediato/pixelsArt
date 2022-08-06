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

window.onload = function AdicionaSelected() {
  corPreta.classList.remove('color');
  corPreta.classList.add('selected');
  corPreta.classList.add('color');
};

const cores = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');

function selectColor(evento) {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selectColor);
}

function corClicadaNaPaleta(evento) {
  const corSelected = document.querySelector('.selected').style.backgroundColor;
  evento.target.style.backgroundColor = corSelected;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', corClicadaNaPaleta);
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', function () {
  if (pixel.style.backgroundColor !== 'white') {
    pixel[index].style.backgroundColor = 'white';
  }
});

function criandoFilho() {
  const pai = document.querySelector('#pixel-board');

  for (let index = 1; index <= 25; index += 1) {
    const filho = document.createElement('div');
    filho.className = 'pixel';
    pai.appendChild(filho);
  }
}
criandoFilho();

window.onload = function AdicionaSelected() {
  const corPreta = document.querySelector('.preto');
  corPreta.classList.add('selected');
};

const cores = document.querySelectorAll('.color');
const pixel = document.querySelector('.pixel');

function selectColor(evento) {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selectColor);
}

const botao = document.querySelector('.button');
botao.addEventListener('click', limpaPixel);

function limpaPixel() {
  for(let index = 0; index< pixel.length; index +=1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
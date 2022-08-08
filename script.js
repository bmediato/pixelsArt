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
const pixel = document.getElementsByClassName('pixel');
console.log(pixel);

function selectColor(evento) {
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}
for (let index = 0; index < cores.length; index += 1) {
  cores[index].addEventListener('click', selectColor);
  cores[index].addEventListener('click', corClicadaNaPaleta);
}
function corClicadaNaPaleta(event) {
  let cor = event.target;
  let corClicada = window.getComputedStyle(cor).backgroundColor;
  return corSelecionada = corClicada;
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', function (event) {
    event.target.style.backgroundColor = corSelecionada;
  })
}

const botao = document.querySelector('#clear-board');
function limpaPixel() {
  let pixel = document.querySelectorAll('.pixel');
  for (let index =0;index < pixel.length; index +=1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
botao.addEventListener('click', limpaPixel);
const pai = document.querySelector('#pixel-board');

for (let index = 1; index <= 25; index += 1) {
  const filho = document.createElement('div');
  filho.className = 'pixel';
  pai.appendChild(filho);
}
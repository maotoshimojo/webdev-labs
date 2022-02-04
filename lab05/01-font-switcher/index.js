const makeBigger = () => {
   content = document.querySelector('.content');
   content.style.fontSize = parseFloat(window.getComputedStyle(content).getPropertyValue('font-size')) + 4 + 'px';
};

const makeSmaller = () => {
   content = document.querySelector('.content');
   content.style.fontSize = parseFloat(window.getComputedStyle(content).getPropertyValue('font-size')) - 4 + 'px';
};

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

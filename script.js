const ball = document.querySelector('.ball__img');
const result = document.querySelector('.result');

document.addEventListener('click', (event) => {
    ball.style.top = event.clientY + 'px';
    ball.style.left = event.clientX + 'px';
})
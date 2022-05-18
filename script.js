const body = document.getElementById('game-body');
const box = document.getElementById('game-body__box');
const btn = document.getElementById('game-body__start');
const rulesMenu = document.querySelector('.game-body__rules');
const burgerMenu = document.getElementById('burger');
const burgerLines = document.getElementById('burger__line');

body.addEventListener('click', event => {
    if(event.target === burgerMenu || event.target === burgerLines) {
        rulesMenu.classList.toggle('game-body__rules-click');
    }
    else if(event.target === btn) {
        btn.style.display = 'none';
        const timeBefore = new Date().getSeconds();
        const coor = () => {
            let math = Math.random() * 800;
            box.style.display = 'block';
            box.style.top = math + 'px';
            box.style.left = math + 'px';
        }
        setTimeout(coor, 3000);
        box.addEventListener('click', () => {
            let resultTime = Math.abs(timeBefore - new Date().getSeconds()) - 3;
            const result = document.createElement('div');
            const resultNode = document.createTextNode(`Ваш результат ${resultTime} секунд/ы !`);
            result.append(resultNode);
            body.append(result);
            result.className = 'result';
            box.style.display = 'none';
        })
    }
    else return;
})
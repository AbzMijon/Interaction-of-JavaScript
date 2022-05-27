//Anounce variables
const startBtn = document.querySelector('.wrapper__btn--start');
const stopBtn = document.querySelector('.wrapper__btn--stop');
const result = document.querySelector('.wrapper__result');

startBtn.addEventListener('click', (event) => {
    let i = 0;
    const startTimer = setInterval(() => {
        const resultTxtNode = document.createTextNode(i++);
        result.append(resultTxtNode);
    }, 1000);
    console.log(i);
})
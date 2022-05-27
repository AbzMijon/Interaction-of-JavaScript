//Anounce variables
const startBtn = document.querySelector('.wrapper__btn--start');
const stopBtn = document.querySelector('.wrapper__btn--stop');
const result = document.querySelector('.wrapper__result');

startBtn.addEventListener('click', () => {
    let i = 0;
    const startTimer = setInterval(() => {
        i++
        console.log(i);
        let resultTxtNode = document.createTextNode(i);
        result.append(resultTxtNode); //??
    }, 1000);
    stopBtn.addEventListener('click', () => {
        const stopTimer = clearInterval(startTimer); 
    })
})
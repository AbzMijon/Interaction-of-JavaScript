//Get times
const miliSecondElem = document.querySelector('.miliseconds');
const secondElem = document.querySelector('.seconds');
const minuteElem = document.querySelector('.minutes');
const hourElem = document.querySelector('.hours');

//Get buttons
const startBtn = document.querySelector('.start--btn');
const pauseBtn = document.querySelector('.pause--btn');
const stopBtn = document.querySelector('.stop--btn');

//Add variable
let hours = 0,
	minutes = 0,
	seconds = 0,
	miliseconds = 0,
	timer;

//Events
startBtn.addEventListener('click', () => {
	timer = setInterval(() => {
		miliseconds++;
		if (miliseconds < 9) {
			miliSecondElem.innerText = '0' + miliseconds;
		}
		if (miliseconds > 9) {
			miliSecondElem.innerText = miliseconds;
		}
		if (miliseconds > 99) {
			miliseconds = 0;
			miliSecondElem.innerText = '00';
			seconds++;
			if (seconds <= 9) {
				secondElem.innerText = '0' + seconds;
			}
			if (seconds > 9) {
				secondElem.innerText = seconds;
			}
			if (seconds > 59) {
				seconds = 0;
				secondElem.innerText = '00';
				minutes++;
				if (minutes <= 9) {
					minuteElem.innerText = '0' + minutes;
				}
				if (minutes > 9) {
					minuteElem.innerText = minutes;
				}
				if (minutes > 59) {
					minutes = 0;
					minuteElem.innerText = '00';
					hours++;
					if (hours <= 9) {
						hourElem.innerText = '0' + hours;
					}
					if (hours > 9) {
						hourElem.innerText = hours;
					}
					if (hours > 23) {
						hourElem.innerText = '00';
					}
				}
			}
		}
	}, 10);
});

pauseBtn.addEventListener('click', () => {
	clearInterval(timer);
});
stopBtn.addEventListener('click', () => {
	miliseconds = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	miliSecondElem.innerText = '00';
	secondElem.innerText = '00';
	minuteElem.innerText = '00';
	hourElem.innerText = '00';
	clearInterval(timer);
});

//The design was taken from the channel https://www.youtube.com/watch?v=GzG1WIJ2XwQ&t=1386s
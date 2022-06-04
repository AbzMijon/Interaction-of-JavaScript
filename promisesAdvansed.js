const root = document.getElementById('root');
const list = document.querySelector('.list');

//Async / await
const getPosts = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();
	const titles1 = await posts[15].title;
	const titles2 = await posts[23].title;
	const titles3 = await posts[7].title;
	const titles4 = await posts[3].title;
	let arr = [titles1, titles2, titles3, titles4];
	arr.forEach((elem) => {
		const item = document.createElement('li');
		item.innerText = elem;
		list.append(item);
	});
};
getPosts().catch((err) =>
	console.log(new Error(`Error is detected in: ${err}`))
);

//Practice
const btn = document.getElementById('btn');
const txt = document.getElementById('txt');

const getTxtFromDatabase = async() => {
	const response = await fetch('https://jsonplaceholder.typicode.com/comments');
	const responseJson = await response.json();
	const text = await responseJson.forEach(e => {
		return txt.innerText = e.body;
	})
}
btn.addEventListener('click', getTxtFromDatabase);
btn.addEventListener('dblclick', () => {
	txt.innerText = '';
})


//Codewars Tasks

//Task 1
const first = () => {
	let arr = [1, 2, 3, 4, 5, 6, 7, 8];
	let result = [];
	for (const iterator of arr) {
		if(iterator % 2 === 0) {
			result.push(iterator * 2);
		}
	}
	console.log(result);
}
first();

//Task 2
let someObj = {
	name: 'user',
	age: 22,
	isWife: true,
}
const second = (obj) => {
	const newObj = {...obj};
	newObj.test = true;
	console.log(newObj);
}
second(someObj);

//Task 3
const third = () => {
	'use strict'
	console.log(typeof null)
}
third();

//Task 4
const fouth = (arr) => {
	const result = arr.filter(elem => elem % 2 === 0);
	console.log(result);
}
fouth([1,2,3,4,5,6]);

//Task 5
const fifth = (num) => {
	let result = [];
	for (let i = 0; i < num; i++) {
		if(i % 2 !== 0) {
			result.push(i);
		};
	}
	console.log(result);
}
fifth(15);

//Task 6
const six = (str) => {
	return +str;
}
console.log(six(-8));
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

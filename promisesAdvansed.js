const root = document.getElementById('root');

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    const titles1 = await posts[15].title;
    const titles2 = await posts[23].title;
    const titles3 = await posts[700].title;
    const titles4 = await posts[3].title;
    let arr = [titles1, titles2, titles3, titles4];
    arr.forEach(elem => {
        console.log(elem);
    })
}
    getPosts().catch((err) => console.log(new Error(`Error is detected in: ${err}`)));
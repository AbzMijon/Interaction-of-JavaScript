//lesson

/* const newPromise = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(jsonUsers => resolve(jsonUsers))
    })
}

newPromise().then(names => names.forEach(element => {
    document.write(element.name);
})); */

//Hometask
const root = document.getElementById('root');
const ulList = document.createElement('ul');
root.append(ulList);

const getTodos = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(responseJson => resolve(responseJson))
    })
}

const printTodos = () => {
    getTodos().then(info => info.forEach(element => {
        const liItem = document.createElement('li');
        ulList.append(liItem);
        liItem.innerText = element.id + ' ' + element.title;
    }))
}
printTodos();

//Other

//Checking status
let response = await fetch('https://jsonplaceholder.typicode.com/todo');
if(response.ok > 299) {
    console.log(new Error('Something is wrong...' + response.status));
}   else console.log('All right!');

//Filter ids server peoples
let allUsers = [];
let errUsers = [];
new Promise ((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resultUsers => {
        resolve(resultUsers)
        resultUsers.forEach(elem => {
            if(elem.id < 5) {
                allUsers.push(elem);
            }   else errUsers.push(elem);
        })
    })
})
console.log(allUsers);
console.log(errUsers);
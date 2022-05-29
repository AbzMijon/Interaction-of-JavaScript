const users = [
    {
        name: 'Vlad',
        age: 21,
    },
    {
        name: 'Misha',
        age: 11,
    },
    {
        name: 'Vladimir',
        age: 57,
    }
]

const otherUsers = [];

for (const user of users) {
    if (user.age >= 18) {
        otherUsers.push(user);
    }
}

const arrObj = [
    {
        name:'egor',
    },
    {
        age:21,
    },
]

//tets
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const num = document.querySelector('.how');


let resultNum = 0;

const add = () => {
    resultNum++;
    num.innerText = resultNum;
    localStorage.setItem('num', resultNum);
}
plus.addEventListener('click', add);

const disAdd = () => {
    resultNum--;
    num.innerText = resultNum;
    if(resultNum < 0) {
        num.innerText = 0;
        resultNum = 0;
    }
    localStorage.setItem('num', resultNum);
}
minus.addEventListener('click', disAdd);

const getStorage = () => {
    if(localStorage.length > 0) {
        const getStorageNum = localStorage.getItem('num');
        num.innerText = getStorageNum;
        resultNum = getStorageNum;
    } else {
        num.innerText = 0;
        resultNum = 0;
    }
}
getStorage();
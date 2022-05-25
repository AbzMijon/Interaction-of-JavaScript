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


export const decktr = () => {
    const obj = {
        name: 'user',
        age: 18,
    }
    const {name, age} = obj;
    
    const arr = [1, 2, 3, 4, 5];
    const [firstNum, , , , lastNum] = arr;
    
    const objForClone = {
        name: 'user',
        isRobot: false,
    }
    const cloningObj = {...objForClone};
    
    const someArr = [-1, 20, 34, -10];
    const arrUpdate = [...someArr];
    
    const users = ['user1', 'user2', 'user3', 'user4', 'user5'];
    const [ADMIN, ...defaultUsers] = users;
    console.log(defaultUsers);
    }
    
    decktr();
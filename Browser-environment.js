//In the begining we need to announce variable with helping document.
const mainRoot = document.getElementById('root'); //We announce our variable
const someText = mainRoot.querySelectorAll('.text'); //Then we didnt write DOCUMENT. because it big and long proccess in JS (p.s we can use if we have nesting!)
//We can interaction with our variable , for example..

// Task 1 = We need forOf/for/forEach our variable 'someText' because it is some half array
for (const iterator of someText) {
    iterator.style.color = 'red'; //What we need to do
}
//But we can say one element in array to do something , for example..
someText[2].style.color = 'green';

//Lets create new element for HTML in JavaScript!
const newElem = document.createElement('h1'); //Add tag
const textForNewElem = document.createTextNode('It is new Element!'); //Add text or what we need
newElem.append(textForNewElem);//Add TAG + TEXT
mainRoot.append(newElem);//Add New Element in Our Block of Node

//And ofcourse we can interaction with him..
newElem.style.display = 'inline-block';
newElem.style.border = '4px solid purple';

//BOM - Browser Object Model ( [location] [history] [screen] ) We can check information about user

//With For
for (let i = 0; i < 11; i++) {
    const someElem = document.createElement('div');
    someElem.style.width = '500px';
    someElem.style.height = '250px';
    someElem.style.backgroundColor = 'blue';
    someElem.style.margin = '15px';
    mainRoot.append(someElem);
}

//Task with 'Hello ${name}';
const someFunction = name => {
    name = prompt('Enter Your Name..')
    const userTag = document.createElement('h2');
    const userName = document.createTextNode(`Wow, Welcome to team, ${name}!`);
    userTag.style.display = 'inline-block';
    userTag.style.margin = '250px';
    userTag.append(userName);
    mainRoot.append(userTag);
}
someFunction('Егор');

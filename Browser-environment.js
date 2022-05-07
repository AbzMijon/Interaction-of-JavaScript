//In the begining we need to announce variable with helping document.
const mainRoot = document.getElementById('root'); //We announce our variable
const someText = mainRoot.querySelectorAll('.text'); //Then we didnt write DOCUMENT. because it big and long proccess in JS (p.s we can use if we have nesting!)
//We can interaction with our variable , for example..

// Task 1 = We need for of our variable 'someText' because it is some half array
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
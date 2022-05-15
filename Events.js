const root = document.getElementById('root'); //Announce variable
const box = document.getElementById('item');
root.style.position = 'absolute'; //Adding some styles..
root.style.width = '100%';
root.style.height = '100%';
//Create a fucntion which in future we give to our *Listener*w
const funcForRoot = () =>console.log('Hello events!');
//Add event with hepling addEventListener (The best)
root.addEventListener('click', funcForRoot);

//List of more using EVENTS
/*
1. Click (Onclick) - click on element.
2. Contextmenu - click right button on mouse on element.
3. Mouseover / mouseout - when cursor on/not on element.
4. Mousedown / mouseup - click and take bottin in elemnt.
5. Mousemove - mouse is move.
*/

/* const target = (e) => e.target.style.backgroundColor = 'red' */; //Target - is anything element that we click, and we can use that very cool!
root.addEventListener('click', target);
box.addEventListener('mouseover', () => box.style.borderRadius = '50%');

//Get coordinate X and Y of document click
document.addEventListener('mousemove', (event) => {
    console.log(` ${event.clientX} :  ${event.clientY}`);
})

//Box over our mouse
const positionCoor = (event) => {
    box.style.left = event.clientX - 207 + 'px';
    box.style.top = event.clientY - 145 + 'px';
}
document.addEventListener('mousemove', positionCoor);

//Game about you never click on box
const randomValue = (multiplay) => {
    return Math.random() * multiplay;
}

box.addEventListener('mouseover', () => {
    box.style.top = randomValue(1000) + 'px';
    box.style.left = randomValue(1000) + 'px';
})

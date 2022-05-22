//Hi, everybody! Today Challendge Only JavaScript with CSS ------------------------------------------------------------------------------------
import { mainRoot, addBtn, theNote, delBtn} from './mod.js';

//Array our future cards and Constructor
let toDoArr = []; //In this array in future we will add our cards
const ToDoConstructor = function (toDoText, toDoId, toDoComplete) {
	//It is a sample card
	this.toDoText = toDoText;
	this.toDoId = toDoId;
	this.toDoComplete = toDoComplete;
};

//Creating layout of card
const addNewCard = function (text, isChecked = false, id) {
	//Announce variables..
	const newCard = document.createElement('div');
	const newCardComplete = document.createElement('button');
	const newCardCompleteTxt = document.createTextNode('✔');
	const newCardToDo = document.createElement('div');
	const newCardToDoTxt = document.createTextNode(text);
	const newCardClose = document.createElement('button');
	const newCardCloseTxt = document.createTextNode('✖');
	const newCardDate = document.createElement('div');
	const newCardDateTxt = document.createTextNode(new Date().toDateString());

	//Adding variables..
	newCardDate.append(newCardDateTxt);
	newCard.append(newCardDate);
	newCardClose.append(newCardCloseTxt);
	newCard.append(newCardClose);
	newCardToDo.append(newCardToDoTxt);
	newCard.append(newCardToDo);
	newCardComplete.append(newCardCompleteTxt);
	newCard.append(newCardComplete);
	mainRoot.append(newCard);

	newCard.dataset.id = id; //Our data-set to equal atribut 'id'
	const toDoApi = new ToDoConstructor(text, newCard.dataset.id, false); //Create card throuth Constructor
	toDoArr.push(toDoApi);
	localStorage.setItem('todoArr', JSON.stringify(toDoArr)); //Add to locale storage

	//Give name our variables for future working in CSS
	newCard.className = isChecked
		? 'root__new-card--completed'
		: 'root__new-card';
	newCardComplete.className = 'root__complete-btn';
	newCardToDo.className = 'root__ToDo';
	newCardClose.className = 'root__close-btn';
	newCardDate.className = 'root__date-btn';

	//Events
	const arrCard = document.getElementsByClassName('root__new-card'); //All cards
	mainRoot.addEventListener('click', (event) => {
		if (event.target === delBtn) {
			//Event for delete all cards
			for (const card of arrCard) {
				card.remove();
			}
			localStorage.removeItem('todoArr');
		} else if (event.target === newCardClose) {
			//Event for delete one card
			let arrFilter = toDoArr.filter(
				(elem) => +elem.toDoId !== +newCard.dataset.id
			);
			localStorage.setItem('todoArr', JSON.stringify(arrFilter));
			newCard.remove();
		} else if (event.target === newCardComplete) {
			//Event for complete card
			newCard.classList.toggle('complete-card-bg');
		} else if (event.target === newCard) {
			//Event for save completly card in locale storage
			const todoClickCard = toDoArr.find(
				(elem) => +elem.toDoId === +event.target.dataset.id
			);
			todoClickCard.toDoComplete = !todoClickCard.toDoComplete;
			localStorage.setItem('todoArr', JSON.stringify(toDoArr));
		}
	});
	theNote.value = '';
	return newCard;
};

addBtn.addEventListener('click', () => {
	addNewCard(theNote.value, false, Date.now());
});

//Add storage elements to HTML
const todoArrFromStorage = JSON.parse(localStorage.getItem('todoArr'));
if (todoArrFromStorage && todoArrFromStorage.length) {
	todoArrFromStorage.forEach((element) => {
		mainRoot.append(
			addNewCard(element.toDoText, element.toDoComplete, element.toDoId)
		);
	});
}

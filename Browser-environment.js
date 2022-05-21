//Hi, everybody! Today Challendge Only JavaScript with CSS ------------------------------------------------------------------------------------

//In The Beginning We Announce Variables..
const mainRoot = document.getElementById('root');
const toolsRow = document.createElement('div');
const addBtn = document.createElement('button');
const textAddBtn = document.createTextNode('Add');
const theNote = document.createElement('input');
const delBtn = document.createElement('button');
const textDelBtn = document.createTextNode('Delete All');

//Then We Add To MainRoot Variables..
mainRoot.append(toolsRow);
addBtn.append(textAddBtn);
toolsRow.append(addBtn);
toolsRow.append(theNote);
delBtn.append(textDelBtn);
toolsRow.append(delBtn);

theNote.placeholder = 'Enter To Do...'; //For placeholder

//Give name our variables for future working in CSS
mainRoot.className = 'main__root';
toolsRow.className = 'root__row';
addBtn.className = 'root__add-btn';
theNote.className = 'root__note';
delBtn.className = 'root__del-btn';

//API Locale Storage
let toDoArr = [];
const ToDoConstructor = function (toDoText, toDoId, toDoComplete) {
	this.toDoText = toDoText;
	this.toDoId = toDoId;
	this.toDoComplete = toDoComplete;
};

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

	newCard.dataset.id = id;
	const toDoApi = new ToDoConstructor(text, newCard.dataset.id, false);
	toDoArr.push(toDoApi);
	localStorage.setItem('todoArr', JSON.stringify(toDoArr));
	console.log(newCard.dataset.id);


	//Give name our variables for future working in CSS
	mainRoot.className = 'main__root';
	toolsRow.className = 'root__row';
	addBtn.className = 'root__add-btn';
	theNote.className = 'root__note';
	delBtn.className = 'root__del-btn';
	newCard.className = isChecked
		? 'root__new-card--completed'
		: 'root__new-card';
	newCardComplete.className = 'root__complete-btn';
	newCardToDo.className = 'root__ToDo';
	newCardClose.className = 'root__close-btn';
	newCardDate.className = 'root__date-btn';

	//Events

	const arrCard = document.getElementsByClassName('root__new-card');
	mainRoot.addEventListener('click', (event) => {
		if (event.target === delBtn) {
			for (const card of arrCard) {
				card.remove();
			}
			localStorage.removeItem('todoArr');
		} else if (event.target === newCardClose) {
			let arrFilter = toDoArr.filter(
				(elem) => +elem.toDoId !== +newCard.dataset.id
			);
			localStorage.setItem('todoArr', JSON.stringify(arrFilter));
			newCard.remove();
		} else if (event.target === newCardComplete) {
			newCard.classList.toggle('complete-card-bg');
		} else if (event.target === newCard) {
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

addBtn.addEventListener('click', (event) => {
	addNewCard(theNote.value, false, Date.now());
});

//Add API element to HTML
const todoArrFromStorage = JSON.parse(localStorage.getItem('todoArr'));
if (todoArrFromStorage && todoArrFromStorage.length) {
	todoArrFromStorage.forEach((element) => {
		mainRoot.append(addNewCard(element.toDoText, element.toDoComplete, element.toDoId));
	});
}
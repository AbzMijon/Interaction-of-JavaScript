//Hi, everybody! Today Challendge Only JavaScript with CSS ------------------------------------------------------------------------------------

//In The Beginning We Announce Variables..
export const mainRoot = document.getElementById('root');
export const toolsRow = document.createElement('div');
export const addBtn = document.createElement('button');
export const textAddBtn = document.createTextNode('Add');
export const theNote = document.createElement('input');
export const delBtn = document.createElement('button');
export const textDelBtn = document.createTextNode('Delete All');

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

//Array our future cards
let toDoArr = []; //In this array in future we will add our cards
export const ToDoConstructor = function (toDoText, toDoId, toDoComplete) {
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
	const toDoApi = new ToDoConstructor(text, id, isChecked); //Create card througth Constructor
	toDoArr.push(toDoApi);
	localStorage.setItem('todoArr', JSON.stringify(toDoArr)); //Add to locale storage

	//Give name our variables for future working in CSS
	newCard.className = isChecked
		? 'root__new-card completed'
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
			toDoArr = [];
			localStorage.removeItem('todoArr');
		} else if (event.target === newCardClose) {
			//Event for delete one card
			let arrFilter = toDoArr.filter(
				(elem) => +elem.toDoId !== +newCard.dataset.id
			);
			console.log(arrFilter);
			localStorage.setItem('todoArr', JSON.stringify(arrFilter));
			newCard.remove();
		} else if (event.target === newCardComplete) {
			//Event for complete card
			let currentElem = event.target.closest('.root__new-card');
			const selectedTodo = toDoArr.find(todo => +todo.toDoId === +currentElem.dataset.id);
			selectedTodo.toDoComplete = !selectedTodo.toDoComplete;
			newCard.classList.toggle('completed');
			localStorage.setItem('todoArr', JSON.stringify(toDoArr));
		}
	});
	theNote.value = '';
	return newCard;
};

addBtn.addEventListener('click', () => {
	if (theNote.value === '') return;
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
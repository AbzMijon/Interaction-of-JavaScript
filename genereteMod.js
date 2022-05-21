export const addNewCard = (text, isChecked = false)=> {
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

    //Give name our variables for future working in CSS
    mainRoot.className = 'main__root';
    toolsRow.className = 'root__row';
    addBtn.className = 'root__add-btn';
    theNote.className = 'root__note';
    delBtn.className = 'root__del-btn';
    newCard.className = 'root__new-card';
    newCardComplete.className = 'root__complete-btn';
    newCardToDo.className = 'root__ToDo';
    newCardClose.className = 'root__close-btn';
    newCardDate.className = 'root__date-btn';

    newCard.dataset.id = 1;
    const toDoApi = new ToDoConstructor(text, ids++, false);
    toDoArr.push(toDoApi);
    localStorage.setItem('todoArr', JSON.stringify(toDoArr));
    return newCard;
}
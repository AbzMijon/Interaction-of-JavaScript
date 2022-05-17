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
    

    //Add new card
    addBtn.addEventListener('click', () => {
        //Announce variables..
        const newCard = document.createElement('div');
        const newCardComplete = document.createElement('button');
        const newCardCompleteTxt = document.createTextNode('✔');
        const newCardToDo = document.createElement('div');
        const newCardToDoTxt = document.createTextNode(theNote.value);
        const newCardClose = document.createElement('button');
        const newCardCloseTxt = document.createTextNode('✖');
        const newCardDate = document.createElement('div');
        const newCardDateTxt = document.createTextNode(new Date().toDateString());
        theNote.value = '';
        
        //Adding variables..
        newCardDate.append(newCardDateTxt);
        newCard.append(newCardDate);
        newCardClose.append(newCardCloseTxt);
        newCard.append(newCardClose);
        newCardToDo.append(newCardToDoTxt);
        newCard.append(newCardToDo);
        newCardComplete.append(newCardCompleteTxt);
        newCard.append(newCardComplete);
        mainRoot.append(newCard)

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

        //Events

        //Delete All Function
        const arrCard = document.getElementsByClassName('root__new-card');
        delBtn.addEventListener('click', () => {
            for (const card of arrCard) {
                card.remove();
            }
        })

        //Delete One Element Function
        newCardClose.addEventListener('click', () => {
            newCard.remove();
        })

        //Complete one Element Function
        newCardComplete.addEventListener('click', () => {
            newCard.classList.toggle('complete-card-bg');
        })
    })
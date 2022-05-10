//Hi, everybody! Today Challendge Only JavaScript Without HTML and CSS ------------------------------------------------------------------------------------


//In The Beginning We Announce All Variables..
const mainRoot = document.getElementById('root');
const toolsRow = document.createElement('div');
const addBtn = document.createElement('button');
const textAddBtn = document.createTextNode('Add');
const theNote = document.createElement('input');
const delBtn = document.createElement('button');
const textDelBtn = document.createTextNode('Delete All');
const allBtn = document.getElementsByTagName('button');

//Then We Add To MainRoot Variables..
mainRoot.append(toolsRow);
addBtn.append(textAddBtn);
toolsRow.append(addBtn);
toolsRow.append(theNote);
delBtn.append(textDelBtn);
toolsRow.append(delBtn);

//Add Styles For Variables..
mainRoot.style.backgroundColor = '#dad8d8';
mainRoot.style.maxWidth = '1150px';
mainRoot.style.margin = '150px auto';
mainRoot.style.padding = '25px 50px';
mainRoot.style.border = '7px solid #000';
mainRoot.style.borderRadius = '20px';
toolsRow.style.width = '100%';
toolsRow.style.display = 'grid';
toolsRow.style.gridTemplateColumns = '1fr 2.5fr 1fr';
toolsRow.style.columnGap = '30px';
toolsRow.style.marginBottom = '100px';
theNote.placeholder = 'Enter To Do...';
addBtn.style.padding = '35px';
delBtn.style.padding = '35px';
theNote.style.padding = '35px';

//Now we create cycle for creating new notes
for (let i = 0; i < 2; i++) {
    //Announce variables..
    const newCard = document.createElement('div');
    const newCardComplete = document.createElement('button');
    const newCardCompleteTxt = document.createTextNode('✔');
    const newCardToDo = document.createElement('div');
    const newCardToDoTxt = document.createTextNode('Todo Text');
    const newCardClose = document.createElement('button');
    const newCardCloseTxt = document.createTextNode('✖');
    const newCardDate = document.createElement('div');
    const newCardDateTxt = document.createTextNode('Date');
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
    //Do styles for the same elements.
    for (const iterator of allBtn) {
        iterator.style.border = '5px solid #000';
        iterator.style.borderRadius = '15px';
        iterator.style.fontWeight = 'bold';
        iterator.style.fontSize = '30px';
        iterator.style.backgroundColor = '#0ff0ff';
        iterator.style.cursor = 'pointer';
    }
    //Add styles..
    newCardToDo.style.color = 'grey'; //newCardToDo
    newCardToDo.style.backgroundColor = '#fff';
    newCardToDo.style.padding = '10px 20px';
    newCardToDo.style.margin = '60px 0';
    newCardToDo.style.borderRadius = '10px';
    newCardToDo.style.overflowY = 'auto';
    newCardToDo.style.fontWeight = 'bold';
    newCardToDo.style.width = '100%';
    newCardToDo.style.minHeight = '100px';
    newCardToDo.style.fontSize = '40px';
    newCardToDo.style.textAlign = 'center';
    newCard.style.padding = '15px 170px 15px 20px'; //newCard
    newCard.style.maxWidth = '100%';
    newCard.style.position = 'relative';
    newCard.style.border = '6px solid #000';
    newCard.style.borderRadius = '20px';
    newCard.style.display = 'flex';
    newCard.style.alignItems = 'center';
    newCard.style.flexDirection = 'row-reverse';
    newCard.style.justifyContent = 'left';
    newCard.style.marginTop = '30px';
    newCardComplete.style.padding = '10px 20px'; //newCardComplete
    newCardComplete.style.marginRight = '15px';
    newCardClose.style.padding = '10px 20px'; //newCardClose
    newCardClose.style.position = 'absolute';
    newCardClose.style.top = '10px';
    newCardClose.style.right = '10px';
    newCardDate.style.backgroundColor = '#fff'; //newCardDate
    newCardDate.style.padding = '10px 35px';
    newCardDate.style.textAlign = 'center';
    newCardDate.style.fontSize = '30px';
    newCardDate.style.color = 'grey';
    newCardDate.style.letterSpacing = '1px';
    newCardDate.style.fontWeight = 'bold';
    newCardDate.style.position = 'absolute';
    newCardDate.style.bottom = '15px';
    newCardDate.style.right = '15px';
    theNote.style.borderRadius = '15px'; //theNote
    theNote.style.textAlign = 'center';
    theNote.style.fontSize = '30px';
    theNote.style.outline = 'none';
    theNote.style.minWidth = '270px';
    theNote.style.fontWeight = 'bold';
    theNote.style.border = '5px solid #000';
}
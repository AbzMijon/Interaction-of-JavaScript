//Challendge Without CSS


//Announce All Variables..
const mainRoot = document.getElementById('root');
const toolsRow = document.createElement('div');
const addBtn = document.createElement('button');
const textAddBtn = document.createTextNode('Add');
const search = document.createElement('input');
const delBtn = document.createElement('button');
const textDelBtn = document.createTextNode('Delete All');
const allBtn = document.getElementsByTagName('button');

//Add To MainRoot All Variables..
mainRoot.append(toolsRow);
addBtn.append(textAddBtn);
toolsRow.append(addBtn);
toolsRow.append(search);
delBtn.append(textDelBtn);
toolsRow.append(delBtn);

//Add Styles For All Variables..
mainRoot.style.backgroundColor = '#dad8d8';
mainRoot.style.maxWidth = '1200px';
mainRoot.style.margin = '150px auto';
mainRoot.style.padding = '25px 50px';
mainRoot.style.border = '7px solid #000';
mainRoot.style.borderRadius = '20px';
toolsRow.style.width = '100%';
toolsRow.style.display = 'grid';
toolsRow.style.gridTemplateColumns = '1fr 2.5fr 1fr';
toolsRow.style.columnGap = '30px';
toolsRow.style.marginBottom = '100px';
search.placeholder = 'Enter To Do...';
addBtn.style.padding = '35px';
delBtn.style.padding = '35px';
search.style.padding = '35px';

for (let i = 0; i < 2; i++) {
    const newCard = document.createElement('div');
    const newCardComplete = document.createElement('button');
    const newCardCompleteTxt = document.createTextNode('✔');
    const newCardToDo = document.createElement('div');
    const newCardToDoTxt = document.createTextNode('Todo Text');
    const newCardClose = document.createElement('button');
    const newCardCloseTxt = document.createTextNode('✖');
    const newCardDate = document.createElement('div');
    const newCardDateTxt = document.createTextNode('Date');
    newCardDate.append(newCardDateTxt);
    newCard.append(newCardDate);
    newCardClose.append(newCardCloseTxt);
    newCard.append(newCardClose);
    newCardToDo.append(newCardToDoTxt);
    newCard.append(newCardToDo);
    newCardComplete.append(newCardCompleteTxt);
    newCard.append(newCardComplete);
    mainRoot.append(newCard)
    for (const iterator of allBtn) {
        iterator.style.border = '5px solid #000';
        iterator.style.borderRadius = '15px';
        iterator.style.fontWeight = 'bold';
        iterator.style.fontSize = '30px';
        iterator.style.backgroundColor = '#00ffff';
        iterator.style.cursor = 'pointer';
    }
    newCardToDo.style.color = 'grey';
    newCardToDo.style.backgroundColor = '#fff';
    newCardToDo.style.border = 'none';
    newCardToDo.style.padding = '10px 20px';
    newCardToDo.style.margin = '60px 0';
    newCardToDo.style.borderRadius = '10px';
    newCardToDo.style.overflowY = 'auto';
    newCardToDo.style.fontWeight = 'bold';
    newCardToDo.style.fontSize = '25px';
    newCardToDo.style.width = '100%';
    newCardToDo.style.minHeight = '100px';
    newCardToDo.style.fontSize = '40px';
    newCardToDo.style.textAlign = 'center';
    newCard.style.padding = '15px 170px 15px 20px';
    newCard.style.maxWidth = '100%';
    newCard.style.border = '6px solid #000';
    newCard.style.borderRadius = '20px';
    newCard.style.display = 'flex';
    newCard.style.alignItems = 'center';
    newCard.style.flexDirection = 'row-reverse';
    newCard.style.justifyContent = 'left';
    newCard.style.marginTop = '30px';
    newCardComplete.style.padding = '10px 20px';
    newCardComplete.style.marginRight = '15px';
    newCardClose.style.padding = '10px 20px';
    newCardDate.style.backgroundColor = '#fff';
    newCardDate.style.padding = '10px 35px';
    newCardDate.style.textAlign = 'center';
    newCardDate.style.fontSize = '30px';
    newCardDate.style.color = 'grey';
    newCardDate.style.letterSpacing = '1px';
    newCardDate.style.fontWeight = 'bold';
    newCardDate.style.borderRadius = '10px';
    newCard.style.position = 'relative';;
    newCardDate.style.position = 'absolute';
    newCardDate.style.bottom = '15px';
    newCardDate.style.right = '15px';
    newCardClose.style.position = 'absolute';
    newCardClose.style.top = '10px';
    newCardClose.style.right = '10px';
    search.style.borderRadius = '15px';
    search.style.textAlign = 'center';
    search.style.fontSize = '30px';
    search.style.outline = 'none';
    search.style.minWidth = '270px';
    search.style.fontWeight = 'bold';
    search.style.border = '5px solid #000';
}
//Challendge Without CSS


//Announce All Variables..
const mainRoot = document.getElementById('root');
const toolsRow = document.createElement('div');
const addBtn = document.createElement('button');
const textAddBtn = document.createTextNode('Add');
const search = document.createElement('input');
const delBtn = document.createElement('button');
const textDelBtn = document.createTextNode('Delete All');

//Add To MainRoot All Variables..
mainRoot.append(toolsRow);
addBtn.append(textAddBtn);
toolsRow.append(addBtn);
toolsRow.append(search);
delBtn.append(textDelBtn);
toolsRow.append(delBtn);

//Add Styles For All Variables..
mainRoot.style.backgroundColor = '#dad8d8';
mainRoot.style.maxWidth = '1000px';
mainRoot.style.margin = '150px auto';
mainRoot.style.padding = '25px 50px';
mainRoot.style.border = '7px solid #000';
mainRoot.style.borderRadius = '20px';
toolsRow.style.width = '100%';
toolsRow.style.display = 'flex';
toolsRow.style.justifyContent = 'space-between';
toolsRow.style.marginBottom = '100px';
search.placeholder = 'Enter To Do...';
addBtn.style.padding = '35px';
delBtn.style.padding = '35px';
search.style.padding = '35px';

for (let i = 0; i < 5; i++) {
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
    newCardToDo.style.color = 'grey';
    newCardToDo.style.backgroundColor = '#fff';
    newCardToDo.style.border = 'none';
    newCardToDo.style.padding = '10px 20px';
    newCardToDo.style.margin = '60px 0';
    newCardToDo.style.borderRadius = '10px';
    newCardToDo.style.overflowY = 'auto';
    newCardToDo.style.fontSize = '25px';
    newCardToDo.style.width = '70%';
    newCardToDo.style.height = '80px';
    newCardToDo.style.fontSize = '40px';
    newCardToDo.style.textAlign = 'center';
    newCard.style.padding = '15px 20px';
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
    newCardClose.style.position = 'relative';
    newCardClose.style.top = '-70px';
    newCardClose.style.right = '-110px';
    newCardDate.style.backgroundColor = '#fff';
    newCardDate.style.padding = '10px 35px';
    newCardDate.style.textAlign = 'center';
    newCardDate.style.position = 'relative';
    newCardDate.style.bottom = '-80px';
    newCardDate.style.right = '20px';
    newCardDate.style.fontSize = '30px';
    newCardDate.style.color = 'grey';
    newCardDate.style.letterSpacing = '1px';
    newCardDate.style.fontWeight = 'bold';
    newCardDate.style.borderRadius = '10px';
}

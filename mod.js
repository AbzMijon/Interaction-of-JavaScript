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
const root = document.getElementById('root');
const input = document.getElementById('input');
const btn = document.getElementById('btn');
const delBtn = document.getElementById('btn-delete');

const allCards = [];
const CardConstructor = function(text, id, isChecked = false) {
    this.text = text;
    this.id = id;
    this.isChecked = isChecked;
}

const generateCard = (text, id, isChecked) => {
    const card = document.createElement('div');
    const cardNode = document.createTextNode(text);
    const closeCard = document.createElement('button');
    const closeCardNode = document.createTextNode('✖');
    const arrOfCards = document.getElementsByClassName('card');
    card.append(cardNode);
    root.append(card);
    closeCard.append(closeCardNode);
    card.append(closeCard);
    card.className = 'card';
    closeCard.className = 'closeCard';
    card.dataset.id = id;

    const newCard = new CardConstructor(text, id, false);
    allCards.push(newCard);
    localStorage.setItem('card', JSON.stringify(allCards));

    root.addEventListener('click', (event) => {
        if(event.target === closeCard) {
            const deleteCard = () => {
                return card.remove();
            }
            deleteCard();
        } else if(event.target === delBtn) {
            const deleteAllCard = () => {
                for (const card of arrOfCards) {
                    return card.remove();
                }
            }
            deleteAllCard();
        }       
    }) 
    return card;
}

btn.addEventListener('click', () => {
    generateCard(input.value, Date.now(), false);
    input.value = '';
})


    const arrStorage = JSON.parse(localStorage.getItem('card'));
    if(arrStorage && arrStorage.length) {
        arrStorage.forEach(element => {
            root.append(generateCard(element.text, element.id, element.isChecked));
        });
    }

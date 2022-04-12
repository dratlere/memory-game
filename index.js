let cardsOrg = ['👽', ' 😈', ' 🥸', ' 😻', ' 🧟‍♂️', ' 🥷🏻'];
cards=cardsOrg.flatMap(i => [i,i]);

let board = document.getElementById('game-table');
for (let i = cards.length -1; i > -1; i--) {
    let elem = document.createElement('div');
    elem.innerText = shuffle(cards);
    elem.className = ('cardStyle');
    board.appendChild(elem);
}



function shuffle(cards) {
    for (let i = cards.length -1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp ;
        return cards[i];   
    }  
    }
    
    

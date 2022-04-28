let cardsOrg = ['👽', ' 😈', ' 💩 ', ' 😻', ' 🧟‍♂️', ' 🤖'];

//dubble the array
cards = cardsOrg.flatMap(i => [i, i]);


//suffel the array
function shuffle(cards) {
    for (let i = cards.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
        return cards;
    }
}
shuffle(cards);

// build the board and cards
let board = document.getElementById('game-table');
for (let i = 0; i < cards.length; i++) {
    let elem = document.createElement('div');
    elem.innerText = (cards[i]);
    elem.className = ('cardStyle');
    elem.classList.add('hidden');
    elem.onclick = flipCard;
    board.appendChild(elem);
    // let elem2 = document.createElement('div');
    // elem2.innerText = (cards[i]);
    // elem2.className = ('cardStyle');
    // elem2.classList.add('hidden');
    // elem2.onclick = flipCard2;
    // board.appendChild(elem2);
}

// let myCard1;
// let myCard2;
//flip the cards
function flipCard(event) {
    return event.target.classList.remove('hidden');
}
// function flipCard2(event2) {
//     return myCard2=2,event2.target.classList.remove('hidden');
    
// }

// if (flipCard1!=flipCard2) {
//    // flipCard1(event1),flipCard2(event2);
//    alert ('sfgsfgs')
// }

// if (myCard1!==myCard2) {
//     alert ('sfgsfgs')
// }
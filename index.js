let cardsOrg = ['👽', ' 😈', ' 💩 ', ' 😻', ' 🧟‍♂️', ' 🤖'];

let players=[
    {player1: 'asd', score:12},
    {player2: 'asd', score:12},
];



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
}


function flipCard(event) {
    return event.target.classList.remove('hidden');
}

const cardsOrg = [{ name: '👽' }, { name: ' 😈' }, { name: ' 💩 ' }, { name: ' 😻' }, { name: ' 🧟‍♂️' }, { name: ' 🤖' }];
cards = cardsOrg.flatMap(i => [i, i]);

function randRange(a, b) {
    return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function shuffle(arr) {
    for (let i = 0; i < 100; i++) {
        let a1 = randRange(0, arr.length);
        let a2 = randRange(0, arr.length);
        if (a1 == a2) {
            i--;
            continue;
        }
        swap(arr, a1, a2);
    }
}

let i = 0;
let compare = [];
let compareF = (obj) => {
    compare[i] = obj;
    i++;

    if (compare.length == 2) {
        if (
            !(
                compare[0].innerHTML == compare[1].innerHTML &&
                compare[0].id != compare[1].id
            )
        ) {
            setTimeout(() => {
                compare[0].innerHTML = ``;
                compare[1].innerHTML = ``;
                compare[0].onclick = cardClicked;
                compare[1].onclick = cardClicked;
            }, 800);
        }
        setTimeout(() => {
            compare = [];
            i = 0;
        }, 1000);
    }
};

const cardClicked = (evn) => {
    if (i != 2) {
        const cardEl = evn.target;
        cardEl.onclick = ``;
        const idx = cardEl.id;
        cardEl.innerHTML = cards[idx].name;
        compareF(cardEl);
    }
};

function creatCardElement(idx) {
    const board = document.getElementById("board");
    const cardEl = document.createElement("div");
    cardEl.id = idx;
    cardEl.className = "card";
    cardEl.onclick = cardClicked;

    board.appendChild(cardEl);
}

function main() {
    shuffle(cards);
    for (let idx in cards) {
        creatCardElement(idx);
    }
}
main();
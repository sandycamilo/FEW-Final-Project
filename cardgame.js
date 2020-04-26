const cards = document.querySelectorAll('.questioncard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    // console.log('Yay, you clicked moi!');

    if (hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 

    // hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework ===
    secondCard.dataset.framework;

    isMatch ? disableCards() : unplipCards();
    }

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unplipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
    }, 1500); 
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false; 
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
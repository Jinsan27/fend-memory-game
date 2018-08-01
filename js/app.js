// Create a list that holds all of your cards
const values = 
    [
    "fa-diamond", "fa-diamond", 
    "fa-paper-plane-o", "fa-paper-plane-o", 
    "fa-anchor", "fa-anchor", 
    "fa-bolt", "fa-bolt", 
    "fa-cube", "fa-cube", 
    "fa-leaf", "fa-leaf", 
    "fa-bicycle", "fa-bicycle", 
    "fa-camera", "fa-camera",
    ];

//generation cards programatically
function generateCards(card) {
    return `<li class="card" data-value="${card}"><i class="fa ${card}"></i>`;
    
};

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(values) {
    let currentIndex = values.length,
    temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = values[currentIndex];
        values[currentIndex] = values[randomIndex];
        values[randomIndex] = temporaryValue;
    }
    return values;
};
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 //starting the game by creating cards on board
function init() {
    let deck = document.querySelector('.deck');
    let cardHTML = shuffle(values).map(function(card) {
       return generateCards(card);
   });

   deck.innerHTML = cardHTML.join('');
};
init();

//Selecting cards 
const allCards = document.querySelectorAll('.card');
let flippedCards = [];

allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {

        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
            flippedCards.push(card);
            card.classList.add('open', 'show');

            if (flippedCards.length == 2) {
                //if they match
                if (flippedCards[0].dataset.value == flippedCards[1].dataset.value) {
                    console.log("Match!")

                    flippedCards[0].classList.add('match');
                    flippedCards[0].classList.add('open');
                    flippedCards[0].classList.add('show');

                    flippedCards[1].classList.add('show');
                    flippedCards[1].classList.add('open');
                    flippedCards[1].classList.add('match');
                }
                //if they don't match
                setTimeout(function() {
                    flippedCards.forEach(function(card) {
                        card.classList.remove('open', 'show');
                    });

                    flippedCards = [];
                }, 500);
            }
            console.log(flippedCards);
        }
    });   
});     
    


//Flipped cards function


//Flipping card when click





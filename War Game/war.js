// need a deck of 52 cards
// we want to have 2 players in the game
// each player will be dealt 26 cards
//each round, a player plays a single card
//each round, we need logic to compare which card is greater
//we need to keep track of score (everytime someone wins round, they get +1 points)
// if they tie, no one is awarded points
//after 26 rounds, we want to determine who is the winner

//create a class for a card
//card has a value, suite, rank

let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let suits = ["Hearts", "Spades", "Diamonds", "Clubs"];
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// class for player - score, hand, name
class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

let player1 = new Player("Joshua");
console.log("printing player 1 hand", player1.hand);
let player2 = new Player("Computer");
console.log(player1, player2);

class Card {
    constructor(value, suit, rank){
        this.value = value;
        this.suit = suit;
        this.rank = rank;
    }
}



//create a class for deck

class Deck {
    constructor(){
        this.deck = []; //going to push cards to this deck later
    }
    //create a method to create the deck
    createDeck(){
        for(let valuesIndex = 0; valuesIndex < values.length; valuesIndex++){
            // console.log("Printing values", values[valuesIndex]);
            //nested for loop
            for(let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++){
                // console.log("Printing suits", suits(suitsIndex));
                this.deck.push(new Card(values[valuesIndex], suits[suitsIndex], ranks[valuesIndex]))
            }
        }
    }

    //create a method to shuffle deck

    //create a method to deal deck
    dealDeck() {
        //put logic or implementation
        //how do i split an array of numbers in half (slice, splice?, pop)
        //how do i push that split array to each players hand
        player1.hand.push(this.deck);
        console.log(player1.hand);

    }
}

//creating an instance of deck
let freshDeck = new Deck();
freshDeck.createDeck()
freshDeck.dealDeck();

//deck needs to hold all cards (array)




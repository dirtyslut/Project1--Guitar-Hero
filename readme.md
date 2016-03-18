Hello World

This is my first project. I will be building a game modeled after guitar hero. 
The objective of the game is that when a key/note hits ASDF hit the corresponding key.
Press end to stop the game and reset to restart the current game. 

Score will be displayed at the end of the game. If the player attains 80% of the max score
they attain a winner title. 

------

Rules:

Each player starts with 7 cards 
Rest of the cards go into the "ocean"

Player1 Ask player2 if they have one of their own cards
    If player2 has requested card
        Player2 loses requested card 
        Player1 gains all requested card
        Player1 submits pair of cards into their respective pair pile
        Player1 gets to go again

    Else 
        Player 1 has to draw card from "ocean"
        And Player2 has their turn

When ocean is dry 


-----
deck = object{suites: values}
hand = array 
match = function()
game = constructor object 
player = object{name: "", age: number}
var card = {}
card.value = 13 
card.faceValue = "King"
card.color = "red"
card.suit = "diamond"


-------
Verbs 

matches (evaluate 2/4 cards)
turn (determine who goes)
go(discard to ocean)
submits(pair pile)
gains(requested card)
loses(requested card)
draw(new card)
terminate (game when player empties hand)

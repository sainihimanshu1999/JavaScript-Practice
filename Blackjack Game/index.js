
function randomCard() {
    return Math.floor(Math.random() * 13) + 1
}

function startGame(){
    let card1 = randomCard()
    let card2 = randomCard()
    let sum = card1 + card2
    document.getElementById('cards-el').textContent += card1 + " , " + card2
    document.getElementById('sum-el').textContent += sum

    if (sum<=21){
        document.getElementById('message-el').textContent = "Do you want to draw a new card?"
    } else if(sum===21){
        document.getElementById('message-el').textContent = "You've got Blackjack!"
    } else {
        document.getElementById('message-el').textContent = "You're out of the game!"
    }
}
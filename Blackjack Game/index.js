
function randomCard() {
    random_number =  Math.floor(Math.random() * 13) + 1

    if (random_number > 10){
        return 10
    }
    else if (random_number === 1){
        return 11
    }
    else {
        return random_number
    }


}

let sum = 0

function startGame(){
    let card1 = randomCard()
    let card2 = randomCard()
    sum = card1 + card2
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


function newCard(){
    let card1 = randomCard()
    sum += card1

    console.log(sum)
    document.getElementById('cards-el').textContent += " , " + card1
    document.getElementById('sum-el').textContent = 'Sum : ' +  sum

    if (sum<=21){
        document.getElementById('message-el').textContent = "Do you want to draw a new card?"
    } else if(sum===21){
        document.getElementById('message-el').textContent = "You've got Blackjack!"
    } else {
        document.getElementById('message-el').textContent = "You're out of the game!"
    }
}
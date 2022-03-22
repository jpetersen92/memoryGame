const cardArray = [
    {
        name: 'boba',
        img: './assets/boba.jpg'
    }, 
    {
        name: 'luke',
        img: './assets/luke.jpg'
    }, 
    {
        name: 'r2d2',
        img: './assets/r2.jpg'
    }, 
    {
        name: 'stormtrooper',
        img: './assets/stormtrooper.jpg'
    }, 
    {
        name: 'vader',
        img: './assets/vader.jpg'
    }, 
    {
        name: 'yoda',
        img: './assets/yoda.jpg'
    }, 
    {
        name: 'boba',
        img: './assets/boba.jpg'
    }, 
    {
        name: 'luke',
        img: './assets/luke.jpg'
    }, 
    {
        name: 'r2d2',
        img: './assets/r2.jpg'
    }, 
    {
        name: 'stormtrooper',
        img: './assets/stormtrooper.jpg'
    }, 
    {
        name: 'vader',
        img: './assets/vader.jpg'
    }, 
    {
        name: 'yoda',
        img: './assets/yoda.jpg'
    }
]
cardArray.sort(() => 0.5 - Math.random())

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let attempts = 0

const result = document.querySelector('#result')
const tries = document.querySelector('#tries')

const grid = document.querySelector('#grid')



const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './assets/logo.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}

const checkMatch = () => {

    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if(optionOneId === optionTwoId) {
        alert('you already clicked that image')
    }
    if (cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './assets/logo.png')
        cards[optionTwoId].setAttribute('src', './assets/logo.png')
    }
    cardsChosen = []
    cardsChosenIds = []
    result.innerHTML = cardsWon.length
    attempts = attempts + 1
    tries.innerHTML = attempts

    if(cardsWon.length === cardArray.length/2) {
        alert('You Matched them all')
        
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

createBoard();
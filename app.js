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

const grid = document.querySelector('#grid')

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('scr', 'assets/blank.png')
        card.
    }
}

createBoard();
let mongoose = require('./connection')

let cartoonNetwork = require('../models/CartoonNetwork')

let cartoonNetworkShows = [

    {

        name: 'Ed, Edd, Eddy',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/All_3_eds.png/200px-All_3_eds.png',
        fav: 'Rolf',
        rating: 9
    },

    {
       
        name: 'Dexters Lab',
        img: 'https://m.media-amazon.com/images/M/MV5BMzdlMDMxNzItNmViNS00NDRkLTg3OWMtNjliZGIxY2M5N2YyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR1,0,182,268_AL_.jpg',
        fav: 'Justice Friends',
        rating: 10
    },

    {
       
        name: 'Courage the Cowardly dog',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Courage_the_Cowardly_Dog_intertitle.jpg/250px-Courage_the_Cowardly_Dog_intertitle.jpg',
        fav: 'Courage',
        rating: 10
    },

    {
       
        name: 'Cow n Chicken',
        img: 'https://m.media-amazon.com/images/M/MV5BMDFkYjE4ZGYtZDkyNC00ZmFiLWJiMGYtNjlmZWVmYWEwNTZhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY268_CR4,0,182,268_AL_.jpg',
        fav: 'Boneless Chicken',
        rating: 8
    },
]

cartoonNetwork.create(cartoonNetworkShows)
    .then(shows => {

        console.log('New Shows', shows)
    })
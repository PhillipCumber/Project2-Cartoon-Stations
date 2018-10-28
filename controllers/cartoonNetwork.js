let express = require('express')
let cartoonNetwork = require('../models/CartoonNetwork')

let cartoonNetworkController = {

    index: (req, res) => {

        // res.send('hey from atlanta')
        cartoonNetwork.find()
            .then((show) => {

                res.render('cartoon/index', {cartoonHBS: show})
            })


    }
}

module.exports = cartoonNetworkController
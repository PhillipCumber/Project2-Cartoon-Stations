let express = require('express')
let cartoonNetwork = require('../models/CartoonNetwork')

let cartoonNetworkController = {

    index: (req, res) => {

        res.send('hey from atlanta')
    }
}

module.exports = cartoonNetworkController
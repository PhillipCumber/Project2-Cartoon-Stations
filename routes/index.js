let express = require('express')
let router = express.Router()
let cartoonNetworkController = require('../controllers/cartoonNetwork')


router.get('/', cartoonNetworkController.index)


module.exports = router
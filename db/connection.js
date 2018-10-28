let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cartoon-stations')

mongoose.connect('open', () => {

    console.log('Mongoose is connected')
})

module.exports = mongoose
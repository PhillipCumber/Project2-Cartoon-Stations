let mongoose = require('../db/connection')
let Schema = mongoose.Schema

let cartoonNetwork = new Schema({

    name: String,
    img: String,
    fav: String,
    rating: Number,

})

module.exports = mongoose.model('Cartoon-Network', cartoonNetwork)
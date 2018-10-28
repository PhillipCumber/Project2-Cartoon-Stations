////Allows use of express module
let express = require('express')
let app = express()
let routes = require('./routes/index')

///Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///Connecting my routes
app.use('/', routes)

///Connecting to my local server
let PORT = process.env.PORT || 3010

app.listen(PORT, () => {

    console.log(`Server is listening on PORT: ${PORT}`)

})
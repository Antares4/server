
// model = require('./models/model')
// var x = model.run()
// console.log(x)
//setup server
//import config                                                                                                                  
require('dotenv').config() 
const port = process.env.PORT || 5000

//import express and cors
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

//import archive routers
const archiveRouter = require('./routes/archives');
const { use } = require("./routes/archives");

app.use('/archives',archiveRouter)
app.listen(port,() => console.log(`listening on port:${port}`))

//const model = require('./models/model')
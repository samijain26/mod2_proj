const express = require('express')
const app = express()

const dotenv = require('dotenv').config()
const mongoConfig = require('./config/db')
//bring in overwrite module for html delete and edit
const methodOverride = require('method-override')

const path = require('path')

const PORT = process.env.PORT || 3000

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.urlencoded({ extended: true }));
//serving static file
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use(methodOverride("_method"))


 // setup routes
app.use('/antique', require('./routes/antiqueRoute'))
//routes


app.listen(PORT, () => console.log(`listening on port: ${PORT}`))

mongoConfig()
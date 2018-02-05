const express = require('express')
const path = require('path');
const favicon = require('serve-favicon')
const routers = require('./router/routers')
const bodyParser = require('body-parser')
const app = express()

app.use(favicon(__dirname + '/public/img/favicon.ico')); 
app.use(express.static(path.join(__dirname, 'public')));  

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(routers)

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.listen('80',() => {
    console.log('server is starting')
}) 
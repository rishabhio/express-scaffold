const express = require('express')
const path = require('path')
const app = express()



app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send('Hello World!'))


// adding a route 
var demo = require('./demo/index')

app.use('/demo', demo)


app.listen(3000, () => console.log('Example app listening on port 3000!'))
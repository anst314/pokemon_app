const express = require('express')
const app = express()
const port = 3000;

const pokemon = require('./models/pokemon')
app.get('/', function (req, res) {
    console.log(pokemon)
    res.send('Welcome to the Pokemon App!')
  })

  app.get('/pokemon', function (req, res) {
    console.log(pokemon)
    res.send(pokemon)
  })
  app.listen(port)




const express = require('express')
const app = express()
const port = 3000;
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

const pokemon = require('./models/pokemon')
app.get('/', function (req, res) {
    console.log(pokemon)
    res.send('Welcome to the Pokemon App!')
  })

  app.get('/pokemon', function (req, res) {
    console.log(pokemon)
    res.render('Index', {pokemonArray: pokemon})
  })

  app.get('/pokemon/:id', function (req, res){
    console.log(req.params)
    res.send(req.params.id)
  })
  app.listen(port)




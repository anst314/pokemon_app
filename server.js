const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const Pokemon = require('./models/PokemonModel');
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
    Pokemon.find({}, (error, allPokemon) => {
        console.log(error, allPokemon)
        res.render('Index', {pokemonArray: pokemon})
    })    
  })

  app.get('/pokemon/:id', function (req, res){
    console.log(req.params)
    res.render('Show', {pokemon: pokemon[req.params.id]})
  })
  app.listen(3000, () => {
    console.log(`Server running on  port: 3000`);
    // gets the warning message out
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})




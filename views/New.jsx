const React = require("react");

function New({pokemonArray}) {
    return(
      <div>
      <h1>New Pokemon</h1>
      <form action='/createPokemon' method='POST'>
          Name:<input type='text' name='name'/>
          <br/>
          img:<input type='text' name='img'/>
          <br/>
          <input type='submit' value='Create New Pokemon'/>
      </form>
  </div>
)
}

module.exports = New;
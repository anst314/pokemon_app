const React = require("react");

function Index({pokemonArray}) {
    return(
      <ul>
        {pokemonArray.map(pokemon => {
            return(
                <li>{pokemon.name}</li>
            )
        })}
      </ul>

    )

}

module.exports = Index;
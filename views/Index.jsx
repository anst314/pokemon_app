const React = require("react");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Index({pokemonArray}) {
    return(
      <ul>
        {pokemonArray.map(pokemon => {
            return(
                <li>{capitalizeFirstLetter(pokemon.name)}</li>
            )
        })}
      </ul>

    )

}

module.exports = Index;
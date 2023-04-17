const React = require("react");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Index({pokemonArray}) {
    return(
      <ul>
        {pokemonArray.map((pokemon, index) => {
            return(
                <li>
                  <a href={`/pokemon/${index}`}>{capitalizeFirstLetter(pokemon.name)}</a>
                  </li>
            )
        })}
      </ul>

    )

}

module.exports = Index;
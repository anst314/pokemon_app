const React = require("react");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function Show({pokemon}) {
    return(
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img + ".jpg"}></img>
            <a href="/pokemon">Back</a>
        </div>

    )

}

module.exports = Show;
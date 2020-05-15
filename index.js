const Pokedex = require('pokedex-promise-v2');
const pokemon = new Pokedex();

pokemon.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
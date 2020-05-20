const Pokedex = require('pokedex-promise-v2');
const pokemon = new Pokedex();
const chalk = require('chalk');
const log = console.log;

const searchPokemon = (value) => {
  return pokemon.getPokemonByName(value)
    .then((res)=> {
      let types = [];
      res.types.forEach(element => {
        types.push(element.type.name)
      });
      let abilities = [];
      res.abilities.forEach(element => {
        abilities.push(element.ability.name)
      });
      log('')
      log(chalk.gray.underline.bold('Información del Pokémon seleccionado'))
      log('')
      log(chalk.cyan('Pokémon: ') + chalk.white(res.name));
      log(chalk.cyan('id: ') + chalk.white(res.id));
      log(chalk.cyan('tipo: ') + chalk.white(types.join(', ')));
      log(chalk.cyan('poderes: ') + chalk.white(abilities.join(', ')));
    })
    .catch((err) => {
      log(chalk.yellow('Pokemon no encontrado'));
    })
}

module.exports = searchPokemon;

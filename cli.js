#!/usr/bin/env node
const searchPokemon = require('./index');

const args = process.argv[2]
 
const cli = (`
    Usage
      $ pokemon <id or name>
 
    Examples
      $ pokemon eevee
      Pokémon: eevee
      id: 133
      tipos: normal
      poderes: anticipation, adaptability, run-away
`);

if(args === undefined || args === 'help') {
    console.log(cli)
} else {
    searchPokemon(args) 
}

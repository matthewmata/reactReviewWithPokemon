import React from 'react';
import PokemonListItem from './PokemonListItem'

const PokemonList = ({pokemon, handleTrash}) => (
  <div id="pokemonList">
    {pokemon.map((poke, index) => <PokemonListItem poke={poke} key={index} index={index} handleTrash={handleTrash}/>)}
  </div>
)

export default PokemonList;
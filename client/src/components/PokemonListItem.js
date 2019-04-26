import React from 'react';

const PokemonListItem = ({poke, handleTrash, index}) => (
  <div className="pokemonItem">
    <div>Name: {poke.name}</div>
    <div>Id: {poke.id}</div>
    <img src={poke.sprites.front_default} alt="pokemon image"/> 
    <button onClick={() => handleTrash(index)}>Throw Me Away</button>
  </div>
)

export default PokemonListItem

import React from 'react';

const PokemonDisplay = ({ pokemonList }) => {
  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDisplay;

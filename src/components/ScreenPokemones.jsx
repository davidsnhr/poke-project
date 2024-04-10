/* eslint-disable react/prop-types */

import './screenPokemones.css';
const ScreenPokemones = ({ pokemones }) => {
  console.log({ pokemones });
  return (
    <div className="screen-container">
      {pokemones?.map((pokemon) => (
        <div key={pokemon.id} className='pokemon-item' >
            {pokemon.name}
            <img src={pokemon.sprites.front_default} alt="pokemon image" />
        </div>
      ))}
    </div>
  );
};

export default ScreenPokemones;

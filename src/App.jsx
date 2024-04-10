import { useEffect, useState } from 'react';
import './App.css';
import ScreenPokemones from './components/ScreenPokemones';

function App() {
  const [pokemones, setPokemones] = useState('');
  const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const pokemonData = async (pokeUrl) => {
    const response = await fetchData(pokeUrl);

    const dataPromises = response.results.map((poke) =>
      fetchData(pokeUrl + '/' + poke.name)
    );

    // console.log(dataPromises);
    const pokemonWithImages = await Promise.all(dataPromises);

    const addAttack = pokemonWithImages.map((pokemon) => {
      const attackValue = pokemon.moves.map((move) => ({
        ...move,
        attack: Math.floor(Math.random() * 50),
      }));

      return { ...pokemon, moves: attackValue };
    });

    console.log(addAttack);
    setPokemones(addAttack);
    // console.log(pokemonWithImages);
  };

  useEffect(() => {
    pokemonData(pokeUrl);
  }, []);

  return (
    <>
      <div className="main-container">
        <h1>Hola mundo</h1>
        {/* screen */}
        <div className="layout-game">
          <div className="container-screen">
            <div className="screen-layout">
              {pokemones && <ScreenPokemones pokemones={pokemones} />}
            </div>
          </div>
          <div className="buttons-container">
            {/* buttons pad*/}
            <div className="container-pad">
              <button className="btn-right"></button>
              <div className="container-up-down">
                <button className="btn-up"></button>
                <button className="btn-down"></button>
              </div>
              <button className="btn-left"></button>
            </div>
            {/* buttons select */}
            <div className="container-select">
              <div className="container-select-btn">
                <button className="btn-select"></button>
                <div>select</div>
              </div>
              <div className="container-start">
                <button className="btn-start"></button>
                <div>start</div>
              </div>
            </div>
            {/* buttons actions */}
            <div className="container-action">
              <div className="button-b-container">
                <button className="button-b"></button>
                <div>B</div>
              </div>
              <div className="button-a-container">
                <button className="button-a"></button>
                <div>A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Pokemon from "./components/Pokemon";

const App = () => {
  /*Setting state for the query and the Pokemon that will be loaded
   onto the screen*/
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState();

  /*url used for the API call*/
  const url = `https://pokeapi.co/api/v2/pokemon/${query}`;

  /*Function for accessing the API and updating pokemon state*/
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      setPokemon(result.data);
      console.log(result);
    }
  };

  /*Making the search lowercase in line with the data in the API*/
  const onUpdate = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

  /*Calling the getData function when the form is submitted*/
  const onEnter = (event) => {
    event.preventDefault();
    getData();
  };

  /*Function to display the Pokemon component*/
  const displayPokemon = () => {
    return <Pokemon pokemon={pokemon} />;
  };

  /*XML with logic to either display the main page message or a Pokemon
  depending on the state of pokemon*/
  return (
    <>
      <div id="container">
        <form onSubmit={onEnter}>
          <input
            id="pokemon-input"
            type="text"
            value={query}
            onChange={onUpdate}
            required
          />
          <button id="submit" type="submit">
            Submit
          </button>
        </form>

        {pokemon ? (
          <div id="pokemon-container">{displayPokemon()}</div>
        ) : (
          <div id="main-page">
            <h2 className="main-page-message">
              Please enter the name of a Pokémon or a Pokédex number.
            </h2>
            <h2 className="main-page-message">
              This website sources data from{" "}
              <a
                id="poke-api-link"
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PokéAPI
              </a>{" "}
              and contains information on Pokémon in every game up to Pokémon
              Black 2.
            </h2>
            <h2 className="main-page-message">
              If a Pokémon does not appear when you hit submit then you have
              either misspelled the Pokémon's name or it is not in this
              database.
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

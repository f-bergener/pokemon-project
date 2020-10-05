import React from "react";
import Games from "./Games";
import Abilities from "./Abilities";
import BaseStats from "./BaseStats";
import "./Pokemon.css";

/*Using props from App.js to define the different
data points that are available for each pokemon*/
const Pokemon = ({ pokemon }) => {
  const {
    abilities,
    base_experience,
    game_indices,
    height,
    id,
    name,
    sprites,
    stats,
    types,
    weight,
  } = pokemon;

  /*Converting the Pokemon type data to have proper capitalization*/
  const oneType = () => {
    return (
      types[0].type.name.substring(0, 1).toUpperCase() +
      types[0].type.name.substring(1).toLowerCase()
    );
  };

  const twoTypes = () => {
    return (
      types[0].type.name.substring(0, 1).toUpperCase() +
      types[0].type.name.substring(1).toLowerCase() +
      ", " +
      types[1].type.name.substring(0, 1).toUpperCase() +
      types[1].type.name.substring(1).toLowerCase()
    );
  };

  /*Running either of the two above type functions depending on
  whether the pokemon has one or two types*/
  let type = types.length > 1 ? twoTypes() : oneType();

  /*XML displaying the various data points for a pokemon*/
  return (
    <div id="pokemon-container">
      <h2 id="pokemon-name">
        {name
          ? name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase()
          : ""}
      </h2>
      {pokemon.sprites ? (
        <img
          id="pokemon-image"
          src={sprites.other.dream_world.front_default}
          alt={name}
        />
      ) : null}
      <h3 className="category">Pokédex Number: {id}</h3>
      <h3 className="category">Type(s): {type}</h3>
      <h3 className="category">Height: {height ? height / 10 : ""} meter(s)</h3>
      <h3 className="category">Weight: {weight ? weight / 10 : ""} kg(s)</h3>
      <h3 id="abilities-header" className="category">
        Abilities:{" "}
      </h3>
      <ul>
        {abilities.map((ability) => {
          return (
            <Abilities
              ability={ability.ability.name}
              url={ability.ability.url}
            />
          );
        })}
      </ul>
      <h3 className="category">Base Experience: {base_experience}</h3>
      <h3 id="base-stats-header" className="category">
        Base Stats
      </h3>
      <BaseStats stats={stats} />
      <h3 id="game-header" className="category">
        Game Appearances:
      </h3>
      <ul>
        {game_indices.map((game) => {
          return <Games game={game.version.name} />;
        })}
      </ul>
    </div>
  );
};

export default Pokemon;

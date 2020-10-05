import React from "react";
import "./Games.css";

const Games = (props) => {
  /*Fixing the game title strings to have correct
  capitalization and to replace the -'s with spaces*/
  const fixString = () => {
    let fixedString = (
      props.game.substring(0, 1).toUpperCase() +
      props.game.substring(1).toLowerCase()
    ).replace("-", " ");
    return fixedString;
  };

  /*Fixing the capitalization for four game
   titles that are two words in one string*/
  const nameCheck = () => {
    if (fixString() === "Firered") {
      return "FireRed";
    } else if (fixString() === "Leafgreen") {
      return "LeafGreen";
    } else if (fixString() === "Heartgold") {
      return "HeartGold";
    } else if (fixString() === "Soulsilver") {
      return "SoulSilver";
    } else {
      return fixString();
    }
  };

  return <li className="game">{nameCheck()}</li>;
};

export default Games;

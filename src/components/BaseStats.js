import React from "react";
import "./BaseStats.css";

const BaseStats = (props) => {
  /*Converting the stat value to a % of 255
  for the progress bars for each stat*/
  const showStat = (stat) => {
    let statNumber = (100 * stat) / 255 + "%";
    return statNumber;
  };

  /*XML displaying each base stat and the progress bar for
  each base stat*/
  return (
    <ul>
      <li className="base-stats">
        <p>HP: {props.stats ? props.stats[0].base_stat : ""}</p>
        <div id="hp-bar" className="bar">
          <div
            id="hp-progress"
            className="progress"
            style={{ width: showStat(props.stats[0].base_stat) }}
          ></div>
        </div>
      </li>
      <li className="base-stats">
        <p>Attack: {props.stats ? props.stats[1].base_stat : ""}</p>
        <div className="bar">
          <div
            id="attack-progress"
            className="progress"
            style={{ width: showStat(props.stats[1].base_stat) }}
          ></div>
        </div>
      </li>
      <li className="base-stats">
        <p>Defense: {props.stats ? props.stats[2].base_stat : ""}</p>
        <div className="bar">
          <div
            id="defense-progress"
            className="progress"
            style={{ width: showStat(props.stats[2].base_stat) }}
          ></div>
        </div>
      </li>
      <li className="base-stats">
        <p>Special Attack: {props.stats ? props.stats[3].base_stat : ""}</p>
        <div className="bar">
          <div
            id="special-attack-progress"
            className="progress"
            style={{ width: showStat(props.stats[3].base_stat) }}
          ></div>
        </div>
      </li>
      <li className="base-stats">
        <p>Special Defense: {props.stats ? props.stats[4].base_stat : ""}</p>
        <div className="bar">
          <div
            id="special-defense-progress"
            className="progress"
            style={{ width: showStat(props.stats[4].base_stat) }}
          ></div>
        </div>
      </li>
      <li className="base-stats">
        <p>Speed: {props.stats ? props.stats[5].base_stat : ""}</p>
        <div className="bar">
          <div
            id="speed-progress"
            className="progress"
            style={{ width: showStat(props.stats[5].base_stat) }}
          ></div>
        </div>
      </li>
    </ul>
  );
};

export default BaseStats;

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Abilities.css";

const Abilities = (props) => {
  /*Using props to get the url for the API call
  to get the descriptions of each ability*/
  const url = props.url;
  const [description, setDescription] = useState();

  /*Defining the function with the API call*/
  const getData = async () => {
    const result = await Axios.get(url);
    setDescription(result.data);
  };

  /*Accessing the API*/
  useEffect(() => {
    getData();
  });

  /*Function to ensure that the English version of the description
  is displayed. The order in which the language appear in the
  JSON is inconsistent*/
  const checkLanguage = () => {
    if (description.effect_entries[0].language.name === "en") {
      return description.effect_entries[0].effect;
    } else {
      return description.effect_entries[1].effect;
    }
  };

  /*Fixing the strings to have correct capitalization
  and to replace -'s with spaces.*/
  const fixString = () => {
    let fixedString = (
      props.ability.substring(0, 1).toUpperCase() +
      props.ability.substring(1).toLowerCase()
    )
      .replace("-", " ")
      .split(" ");
    if (fixedString.length > 1) {
      fixedString =
        fixedString[0].substring(0, 1).toUpperCase() +
        fixedString[0].substring(1).toLowerCase() +
        " " +
        fixedString[1].substring(0, 1).toUpperCase() +
        fixedString[1].substring(1).toLowerCase();
    } else {
      fixedString = fixedString.join(" ");
      fixedString =
        fixedString.substring(0, 1).toUpperCase() +
        fixedString.substring(1).toLowerCase();
    }
    return fixedString;
  };

  /*XML displaying each ability and the description for that ability*/
  return (
    <div className="ability-container">
      <li className="ability">{fixString()}</li>
      <p className="description">{description ? checkLanguage() : ""}</p>
    </div>
  );
};

export default Abilities;

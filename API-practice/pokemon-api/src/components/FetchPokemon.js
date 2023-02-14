import React, { useState } from "react";

const FetchPokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [token, setToken] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=807&offset=0"
  );

  const onClickHandler = () => {
    fetch(token)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon([...pokemon, ...response.results]);
        setToken(response.next);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button type="button" onClick={onClickHandler}>
        {!pokemon.length ? "Fetch Pokemon" : "Get More"}
      </button>
      {pokemon.length ? pokemon.map((p, i) => <li key={i}>{p.name}</li>) : null}
    </div>
  );
};
export default FetchPokemon;

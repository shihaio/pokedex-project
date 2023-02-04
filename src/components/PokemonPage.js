import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const params = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
        );
        setPokemonData({
          name: params.pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          isWaterType:
            response.data.types[0].type.name === "water" ? true : false,
        });
      } catch (err) {}
    }
    getData();
  }, []);
  return (
    <div>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.img} />
      <h3>Species: {pokemonData.species}</h3>
      <h3>Type: {pokemonData.type}</h3>
      <h3>HP: {pokemonData.hp}</h3>
      <h3>Attack: {pokemonData.attack}</h3>
      <h3>Defense: {pokemonData.defense}</h3>
    </div>
  );
}

export default PokemonPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonComponent from "./PokemonComponent";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        // console.log(response.data.results);
        setPokemonList(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);
  let pokemonListToShow = [];
  if (pokemonList?.length) {
    pokemonListToShow = pokemonList?.map((item, index) => {
      return (
        <Link to={`/pokemon/${item.name}`} key={index}>
          <Card border="secondary" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      );
    });
  }
  return <div>{pokemonListToShow.length && pokemonListToShow}</div>;
}

export default Home;

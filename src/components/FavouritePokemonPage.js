import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import PokemonModal from "./PokemonModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function FavouritePokemonPage() {
  const [favPokemonList, setFavPokemonList] = useState([]); // starting with empty array.

  const nameListLocal = localStorage.getItem("pokemonNameList");
  let updatedNameList;
  if (nameListLocal === null) {
    updatedNameList = [];
  } else {
    updatedNameList = JSON.parse(nameListLocal); // javascript object {pokemonNameList: ["pikachu","ivy"]}
  }
  useEffect(() => {
    async function getFavPokemonDataList() {
      try {
        const extractedFavPokemonDataList = [];

        for await (let name of updatedNameList) {
          const scanFavPokemonDataList = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          extractedFavPokemonDataList.push(scanFavPokemonDataList.data);
        }
        setFavPokemonList(extractedFavPokemonDataList);
      } catch (error) {}
    }
    getFavPokemonDataList();
  }, []);

  let favPokemonListPage = [];
  favPokemonListPage = favPokemonList.map((element, index) => {
    return (
      <Col md={4} xs={12} className="py-2" key={index}>
        <PokemonModal
          id={element.id}
          imgUrl={element.sprites.front_default}
          name={element.name}
          types={element.types}
          height={element.height}
          weight={element.weight}
          abilities={element.abilities}
        />
      </Col>
    );
  });

  return (
    <Container>
      <Row>{favPokemonListPage}</Row>
    </Container>
  );
}

export default FavouritePokemonPage;

// <div>{JSON.parse(localStorage.getItem("pokemonFavListX"))}</div>;

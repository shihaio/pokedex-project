import Card from "react-bootstrap/Card";
import React, { useState, useEffect } from "react";
import axios from "axios";

function FavouritePokemonPage() {
  const [favPokemonList, setFavPokemonList] = useState([]); // starting with empty array.

  useEffect(() => {
    async function getFavPokemonDataList() {
      try {
        const extractedFavPokemonDataList = [];
        const rawFavPokemonDataList = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        for await (let element of rawFavPokemonDataList) {
          const scanFavPokemonDataList = await axios.get(element.name);
          extractedFavPokemonDataList.push(scanFavPokemonDataList.data);
        }
        setFavPokemonList(extractedFavPokemonDataList);
      } catch (error) {
        favPokemonList({ type: "FETCH_FAILURE" });
      }
    }
    getFavPokemonDataList();
    console.log(getFavPokemonDataList);
  }, []);

  // let favPokemonListPage = [];
  // favPokemonListPage = favPokemonList.map((element, index) => {
  //   return (
  //     <Col md={4} xs={12} className="py-2" key={index}>
  //       <PokemonModal
  //         id={element.id}
  //         imgUrl={element.sprites.front_default}
  //         name={element.name}
  //         types={element.types}
  //         height={element.height}
  //         weight={element.weight}
  //         abilities={element.abilities}
  //       />
  //     </Col>
  //   );
  // });

  return (
    <Card>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>
  );
}

export default FavouritePokemonPage;

// <div>{JSON.parse(localStorage.getItem("pokemonFavListX"))}</div>;

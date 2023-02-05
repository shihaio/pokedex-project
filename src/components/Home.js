import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonModal from "./PokemonModal";
import PokemonPage from "./PokemonPage";

function Home() {
  const [pokemonDataList, setPokemonDataList] = useState([]);
  useEffect(() => {
    async function getPokemonDataList() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemonNameList = response.data.results;
        const extractedPokemonDataList = [];

        for await (let element of pokemonNameList) {
          const scanPokemonDataList = await axios.get(element.url);
          extractedPokemonDataList.push(scanPokemonDataList.data);
        }
        setPokemonDataList(extractedPokemonDataList);
      } catch (error) {
        pokemonDataList({ type: "FETCH_FAILURE" });
      }
    }
    getPokemonDataList();
  }, []);

  console.log(pokemonDataList);

  let pokemonListHomePage = [];
  pokemonListHomePage = pokemonDataList.map((element, index) => {
    return (
      <Col md={4} xs={12} className="py-2">
        <PokemonModal
          key={index}
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
      <Row>{pokemonListHomePage}</Row>
      {/* <Col>haha</Col>
      <Col>haha</Col>
      <Col>haha</Col> */}
    </Container>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PokemonModal from "./PokemonModal";
import Button from "react-bootstrap/Button";

function Home() {
  const [pokemonDataList, setPokemonDataList] = useState([]);

  useEffect(() => {
    async function getPokemonDataList() {
      try {
        // "await" keyword on returned promises.
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon"); // response is a variable - it stores package we receieved from remote API.
        const pokemonNameList = response.data.results; // response is the package we received from remote API!
        const extractedPokemonDataList = []; // this is an empty array to store iterated elements into it!

        for await (let element of pokemonNameList) {
          // axios takes the URL as an argument and returns a promise.
          // you don't have to transform the returned response to JSON anymore.
          const scanPokemonDataList = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${element.name}`
          ); // element = data object
          extractedPokemonDataList.push(scanPokemonDataList.data);
        }
        setPokemonDataList(extractedPokemonDataList); // we set the state as extractedPokemonDataList, this is a client-side search package.
      } catch (error) {
        console.log("Fetch Failure");
      }
    }
    getPokemonDataList(); // this function is rendered and current state is with extractedPokemonDataList!
  }, []);

  let pokemonListHomePage = [];
  pokemonListHomePage = pokemonDataList.map((element, index) => {
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
          buttonName={"Like"}
        />
      </Col>
    );
  });

  return (
    <Container>
      <Row>{pokemonListHomePage}</Row>
      {/* <Button
        onClick={() => {
          localStorage.setItem("myCat", "Tom");
        }}
      >
        Set
      </Button> */}
      {/* {localStorage.getItem("myCat")} */}
    </Container>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemonList(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
  }, []);

  let pokemonListToShow = [];
  pokemonListToShow = pokemonList.map((element, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Body>
          <Card.Title>Pokémon</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href={`/pokemon/${element.name}`}>
            {element.name}
          </Card.Link>
          <Card.Link href={`/pokemon/${element.index}`}>
            {element.index}
          </Card.Link>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      <Row>
        <Col sm={4}>{pokemonListToShow}</Col>
      </Row>
    </Container>
  );
}

export default Home;
